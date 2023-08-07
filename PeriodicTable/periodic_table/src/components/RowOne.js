import React from 'react'

const RowOne = () => {
    return (
        // breakpoints col-10 col-md-8 col-sm-4
        // row-1 d-flex justify-content-between
        <div className='container border border-danger'>

            <div className='row justify-content-md-between'>
                <div className='hydrogen element'>
                    <h4>1</h4>
                    <h4>H</h4>
                </div>
                <div className='helium element'>
                    <h4>2</h4>
                    <h4>He</h4>
                </div>
            </div>
        </div>
    )
}

export default RowOne;