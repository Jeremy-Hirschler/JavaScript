import React from 'react'

const RowThree = () => {
    const elementsThree = 
    [
        {   A: 'Sodium',
            Number: 11,
            Name: 'Na',
            Side: 'Left'
        },

        {   A: 'Magnesium',
            Number: 12,
            Name: 'Mg',
            Side: 'Left'
        },
        {   A: 'Aluminum',
            Number: 13,
            Name: 'Al',
            Side: 'Right'
        },
        {   A: 'Silicon',
            Number: 14,
            Name: 'Si',
            Side: 'Right'
        },
        {   A: 'Phosphorus',
            Number: 15,
            Name: 'P',
            Side: 'Right'
        },
        {   A: 'Sulfur',
            Number: 16,
            Name: 'S',
            Side: 'Right'
        },
        {   A: 'Chlorine',
            Number: 17,
            Name: 'Cl',
            Side: 'Right'
        },
        {   A: 'Argon',
            Number: 18,
            Name: 'Ar',
            Side: 'Right'
        },
    ];

    // separate elements based on position in table
    const left = elementsThree.filter(element => {
        return element.Side == 'Left'
    });
    const right = elementsThree.filter(element => {
        return element.Side == 'Right'
    });


    return (
        <div className='mx-5'>
            <div className='d-flex justify-content-md-between'>
            {/* flex the left and right sides of table */}
                <div className='left d-flex mt-1 marl'>
                    {
                        left.map(item => {
                            return <div key={item.A} className='border border-dark element marr'>
                                        
                                            <h5>{item.Number}</h5>
                                            <h5>{item.Name}</h5>
                                        
                                    </div>
                        })
                    }
                </div>
                <div className='right d-flex mt-1'>
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
        </div>
    )
}

export default RowThree;