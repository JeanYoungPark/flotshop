import React, { useState, useCallback, useEffect, SyntheticEvent, useContext } from 'react'
import { adminFormContext } from 'pages/admin/AdminRegister'
import { useNavigate } from 'react-router';
import axios from 'axios';

export const AdminForm = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailId, setEmailId] = useState<string>('');
    const [emailDomain, setEmailDomain] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPassword2, setNewPassword2] = useState<string>('');
    const [newPasswordBtn, setNewPasswordBtn] = useState<boolean>(false);

    const {id} = useContext(adminFormContext);

    const onBack = () => {
        navigate(-1);
    };

    const onSubmit = useCallback(async () => {
        const data = {
            user_id: userId,
            password: password,
            name: name,
            email: email
        }
        
        try {
            const res = await axios.post('http://localhost:3001/api/admin/user/join', data);
            if(res.status === 200){
                alert('등록되었습니다.');
                navigate('/admin/user/list');
            }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        }

    }, [email, name, navigate, password, userId])

    const onUpdateSubmit = useCallback(async() => {
        const data = {
            id: id,
            user_id: userId,
            password: password,
            name: name,
            email: email,
            newPassword: newPassword
        }

        try {
            const res = await axios.post('http://localhost:3001/api/user/update', data);
            if(res.status === 200){
                alert('수정되었습니다.');
                navigate(`/admin/user/modify/${id}`);
            }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
        }
    }, [email, id, name, navigate, newPassword, password, userId])

    const chkUser = useCallback(async() => {
        try {
            const res = await axios.post('http://localhost:3001/api/find/user', {user_id: userId});
            
            if(res.status === 200 && res.data.user !== null){
                alert('존재하는 회원입니다.');
                return false;
            }
        } catch (error) {
            console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
            return false;    
        }

        return true;
    }, [userId]);
    
    const onValidate = useCallback(async(e: SyntheticEvent) => {
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(userId?.length < 4) {
            alert('아이디는 4~10자 사이로 입력해주세요.');
            return false;
        }else if(password?.length < 6){
            alert('비밀번호는 6~15자 사이로 입력해주세요.');
            return false;
        }else if(name?.length < 2){
            alert('이름은 2~10자 사이로 입력해주세요.');
            return false;
        }

        if(!emailPattern.test(email)){
            alert('올바른 이메일 형식을 입력해주세요.');
            return false;
        }

        if(id){
            if(newPasswordBtn){
                if(newPassword?.length < 6){
                    alert('비밀번호는 6~15자 사이로 입력해주세요.');
                    return false;
                }
            }

            if(newPassword === newPassword2){
                onUpdateSubmit();
            }else{
                alert('새 비밀번호를 확인해주세요.');
                return false;
            }
        }else{
            const existUser = await chkUser();
            
            if(existUser) onSubmit();
        }
    }, [chkUser, email, id, name?.length, newPassword, newPassword2, newPasswordBtn, onSubmit, onUpdateSubmit, password?.length, userId?.length]);

    useEffect(() => {
        if(emailId && emailDomain){
            setEmail(`${emailId}@${emailDomain}`);
        }
    }, [emailId, emailDomain]);

    useEffect(() => {
        if(id){
            const findUser = async() => {
                try {
                    const res = await axios.post('http://localhost:3001/api/find/user', {id: id});
                    const data = res.data.user;

                    if(res.status === 200 && res.data.user){
                        setUserId(data.user_id);
                        setPassword(data.password); // 비밀번호는 수정 다른 방식으로 진행
                        setName(data.name);
                        setEmailId(data.email.split('@')[0]);
                        setEmailDomain(data.email.split('@')[1]);
                        setEmail(data.email);
                    }
                } catch (error) {
                    console.log('문제가 발생하였습니다. 고객센터로 문의주세요.');
                }

            }
            
            findUser();
        }
    }, [id]);

    return (
        <form className='space-y-6 min-w-1/2' onSubmit={onValidate}>
            <h1 className="text-xl font-semibold leading-10 text-gray-900">{id ? '관리자 수정' : '관리자 등록'}</h1>
            <div>
                <label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900">아이디</label>
                <div className="mt-2">
                    <input id="userId" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required maxLength={10} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
                <div className="mt-2">
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required maxLength={15} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" placeholder={id && '현재 비밀번호를 입력해주세요.'}/>
                </div>
            </div>
            {id && (
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
            )}
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
    )
}
