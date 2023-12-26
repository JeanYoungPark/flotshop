import React, {useCallback, useState, SyntheticEvent} from 'react'
import { Header } from 'components/admin/Header'
import axios from 'axios';
import { useCookies  } from 'react-cookie';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

export const Login = () => {
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [cookies, setCookies] = useCookies(['flotshopUserSession']);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = useCallback(async(e: SyntheticEvent) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3001/api/login', {user_id: userId, password: password});
        
        if(res.data.result) {
            const session = res.data.result.session_id;
            const expirationDate = res.data.result.expired_at;
            const date = new Date(expirationDate);

            setCookies('flotshopUserSession', session, {
                path: '/',
                expires: date
            });
            
            dispatch({type: 'setUser', data: {
                id: res.data.user.id,
                user_id: res.data.user.user_id,
                name: res.data.user.name,
                is_admin: res.data.user.is_admin
            }});

            alert('로그인 되었습니다.');
            dispatch({type: 'setName', name: 'admin'});
            navigate('/admin/user/list');
        }else {
            alert(res.data.message);
        }
    }, [dispatch, navigate, password, setCookies, userId]);

    return (
        <div>
            <Header />
            <div className="fixed flex w-full h-full justify-center items-center">
                <div className="w-80 pb-40">
                    <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">id</label>
                        <div className="mt-2">
                            <input id="id" type="text" onChange={(e) => setUserId(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
