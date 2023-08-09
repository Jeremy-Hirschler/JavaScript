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
        <div className='container'>
            <div className='d-flex justify-content-md-between'>
            {
                left.map(item => {
                    return <div key={item.A} className='border border-dark element'>
                                <h4>{item.Number}</h4>
                                <h4>{item.Name}</h4>
                            </div>
                })
            }

            {
                right.map(item => {
                    return <div key={item.A} className='border border-dark element'>
                                <h4>{item.Number}</h4>
                                <h4>{item.Name}</h4>
                            </div>
                })
            }
            
            </div>
        </div>
    )
}

export default RowOne;