import React from 'react'
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';

const Main = () => {
    return (
        <div className='full-table'>
            <RowOne/>
            <RowTwo/>
            <RowThree/>
        </div>
    )
}

export default Main;