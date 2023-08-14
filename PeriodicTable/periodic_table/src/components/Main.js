import React from 'react'
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';
import RowSix from './RowSix';
import RowSeven from './RowSeven';

const Main = () => {
    return (
        <div className='full-table'>
            <RowOne/>
            <RowTwo/>
            <RowThree/>
            <RowFour/>
            <RowFive/>
            <RowSix/>
            <RowSeven/>
        </div>
    )
}

export default Main;