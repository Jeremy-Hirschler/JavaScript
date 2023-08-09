import React from 'react'

const RowOne = () => {
    const elementsOne = 
    [
        {   A: 'Hydrogen',
            Number: 1,
            Name: 'H',
            Side: 'Left'
        },

        {   A: 'Helium',
            Number: 2,
            Name: 'He',
            Side: 'Right'
        },
    ];

    const left = elementsOne.filter(element => {
        return element.Side == 'Left'
    });
    const right = elementsOne.filter(element => {
        return element.Side == 'Right'
    });


    return (
        <div className='mx-5'>
            <div className='d-flex justify-content-md-between marl'>
            {
                left.map(item => {
                    return <div key={item.A} className='border border-dark element marr'>
                                <h5>{item.Number}</h5>
                                <h5>{item.Name}</h5>
                            </div>
                })
            }

            {
                right.map(item => {
                    return <div key={item.A} className='border border-dark element marl'>
                                <h5>{item.Number}</h5>
                                <h5>{item.Name}</h5>
                            </div>
                })
            }
            
            </div>
        </div>
    )
}

export default RowOne;