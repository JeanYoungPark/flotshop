import React, { useState, useEffect, SyntheticEvent } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { adminGetApi, adminModifyApi } from 'api/admin/user'

export const Modify = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailId, setEmailId] = useState<string>('');
    const [emailDomain, setEmailDomain] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPassword2, setNewPassword2] = useState<string>('');
    const [newPasswordBtn, setNewPasswordBtn] = useState<boolean>(false)
    
    const { id } = useParams();

    const onBack = () => {
        navigate(-1);
    };
   
    const validUserId = () => {
        if(userId?.length < 4) {
            alert('아이디는 4~10자 사이로 입력해주세요.');
            return true;
        }

        return false;
    }

    const validPassword = () => {
        if(password?.length < 6){
            alert('비밀번호는 6~15자 사이로 입력해주세요.');
            return true;
        }

        return false;
    }

    const validName = () => {
        if(name?.length < 2){
            alert('이름은 2~10자 사이로 입력해주세요.');
            return true;
        }

        return false;
    }

    const validEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!emailPattern.test(email)){
            alert('올바른 이메일 형식을 입력해주세요.');
            return true;
        }

        return false;
    }

    const valideNewPassword = (newPassword: string, newPassword2: string) => {
        if(newPassword?.length < 6){
            alert('비밀번호는 6~15자 사이로 입력해주세요.');
            return true;
        }

        if(newPassword !== newPassword2){
            alert('새 비밀번호를 확인해주세요.');
            return true;
        }

        return false;
    }

    const onSubmit = async (userId: string, password: string, name: string, email:string, newPassword: string) => {
        const data = {
            id: id,
            user_id: userId,
            password: password,
            name: name,
            email: email,
            newPassword: newPassword
        }

        const res = await adminModifyApi(data);
        if(res){
            alert('수정되었습니다.');
            navigate(`/admin/user/modify/${id}`);
        }
    }

    const onValidate = async(e: SyntheticEvent) => {
        e.preventDefault();

        if(validUserId() || validPassword() || validName() || validEmail() || valideNewPassword(newPassword, newPassword2)){
            return false;
        }

        onSubmit(userId, password, name, email, newPassword);
    }

    useEffect(() => {
        if(emailId && emailDomain){
            setEmail(`${emailId}@${emailDomain}`);
        }
    }, [emailId, emailDomain]);

    useEffect(() => {
        const findUser = async() => {
            const res = await adminGetApi(id);
            
            if(res){
                setUserId(res.user_id);
                setPassword(res.password); // 비밀번호는 수정 다른 방식으로 진행
                setName(res.name);
                setEmailId(res.email.split('@')[0]);
                setEmailDomain(res.email.split('@')[1]);
                setEmail(res.email);
            }
        }
        
        findUser();
    }, []);

    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <form className='space-y-6 min-w-1/2' onSubmit={onValidate}>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">관리자 수정</h1>
                <div>
                    <label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900">아이디</label>
                    <div className="mt-2">
                        <input id="userId" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required maxLength={10} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
                    <div className="mt-2">
                        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required maxLength={15} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" placeholder='현재 비밀번호를 입력해주세요.'/>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="button"  onClick={() => setNewPasswordBtn(!newPasswordBtn)} className="rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        비밀번호 변경
                        </button>
                    </div>
                    {newPasswordBtn && (
                        <div>
                            <div className="mt-2">
                                <input id="newPassword" type="password" onChange={(e) => setNewPassword(e.target.value)} maxLength={15} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" placeholder={id && '새 비밀번호를 입력해주세요.'}/>
                            </div>
                            <div className="mt-2">
                                <input id="newPassword2" type="password" onChange={(e) => setNewPassword2(e.target.value)} maxLength={15} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" placeholder={id && '새 비밀번호를 다시 입력해주세요.'}/>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">이름</label>
                    <div className="mt-2">
                        <input id="name" type="name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>
                <div>
                    <label htmlFor="emailId" className="block text-sm font-medium leading-6 text-gray-900">이메일</label>
                    <div className="mt-2 flex">
                        <div>
                            <input id="emailId" type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                        </div>
                        <div className="flex text-lg align-items-center px-2">@</div>
                        <div>
                            <input id="emailDomain" type="text" value={emailDomain} onChange={(e) => setEmailDomain(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" onClick={onBack} className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Save
                    </button>
                </div>
            </form>
        </div>
    )
}
