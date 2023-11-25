import React from 'react'
import { CommonProvider } from 'contexts/CommonProvider'
import { Search } from 'components/Search';
import { Menu } from 'components/Menu';
import { OffLineComponent } from 'components/about/OffLineComponent';

export const OffLine = () => {
    return (
        <CommonProvider>
            <Search/>
            <Menu/>
            <div id='offline' className='container'>
                <OffLineComponent/>
            </div>
        </CommonProvider>
    )
}
