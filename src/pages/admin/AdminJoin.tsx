import React, { useState, useEffect, SyntheticEvent } from 'react'
import { useNavigate } from 'react-router'
import { checkUserApi, joinApi } from 'api/admin/auth';

export const AdminJoin = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailId, setEmailId] = useState<string>('');
    const [emailDomain, setEmailDomain] = useState<string>('');

    const onBack = () => {
        navigate(-1);
    };

    const validUserId = () => {
        if(userId?.length < 4) {
            alert('아이디는 4~10자 사이로 입력해주세요.');
            return false;
        }
    }

    const validPassword = () => {
        if(password?.length < 6){
            alert('비밀번호는 6~15자 사이로 입력해주세요.');
            return false;
        }
    }

    const validName = () => {
        if(name?.length < 2){
            alert('이름은 2~10자 사이로 입력해주세요.');
            return false;
        }
    }

    const validEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!emailPattern.test(email)){
            alert('올바른 이메일 형식을 입력해주세요.');
            return false;
        }
    }

    const onSubmit = async (userId: string, password: string, name: string, email:string) => {
        const data = {
            user_id: userId,
            password: password,
            name: name,
            email: email
        }
        
        const res = await joinApi(data);

        if(res){
            alert('등록되었습니다.');
            navigate('/admin/user/list');
        }
    }

    const onValidate = async(e: SyntheticEvent) => {
        e.preventDefault();

        validUserId();
        validPassword();
        validName();
        validEmail();

        const existUser = await checkUserApi(userId);

        if(existUser.user === null){
            onSubmit(userId, password, name, email);
        }else{
            alert('존재하는 회원입니다.')
        }
    }

    useEffect(() => {
        if(emailId && emailDomain){
            setEmail(`${emailId}@${emailDomain}`);
        }
    }, [emailId, emailDomain]);

    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <form className='space-y-6 min-w-1/2' onSubmit={onValidate}>
                <h1 className="text-xl font-semibold leading-10 text-gray-900">관리자 등록</h1>
                <div>
                    <label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900">아이디</label>
                    <div className="mt-2">
                        <input id="userId" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required maxLength={10} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
                    <div className="mt-2">
                        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required maxLength={15} className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                    </div>
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
