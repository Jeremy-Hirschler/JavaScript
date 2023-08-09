import React from 'react'
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';

const Main = () => {
    return (
        <div className='full-table'>
            <RowOne/>
            <RowTwo/>
            <RowThree/>
            <RowFour/>
        </div>
    )
}

export default Main;