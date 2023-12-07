import React, { createContext } from 'react'
import { useParams } from 'react-router';
import { AdminForm } from 'components/admin/AdminForm';

type formContextType = {id: string | undefined}

export const adminFormContext = createContext<formContextType>({id: ''});

export const AdminRegister = () => {
    const { id } = useParams();

    return (
        <div className='pt-10 flex w-full h-full justify-center items-center'>
            <adminFormContext.Provider value={{id}}>
                <AdminForm/>
            </adminFormContext.Provider>
        </div>
    )
}
