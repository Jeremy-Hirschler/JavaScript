import React from 'react'

const RowTwo = () => {
    // array of all elements in a row
    const elementsTwo = 
    [
        {   A: 'Lithium',
            Number: 3,
            Name: 'Li',
            Side: 'Left'
        },

        {   A: 'Beryllium',
            Number: 4,
            Name: 'Be',
            Side: 'Left'
        },
        {   A: 'Boron',
            Number: 5,
            Name: 'B',
            Side: 'Right'
        },
        {   A: 'Carbon',
            Number: 6,
            Name: 'C',
            Side: 'Right'
        },
        {   A: 'Nitrogen',
            Number: 7,
            Name: 'N',
            Side: 'Right'
        },
        {   A: 'Oxygen',
            Number: 8,
            Name: 'O',
            Side: 'Right'
        },
        {   A: 'Fluorine',
            Number: 9,
            Name: 'F',
            Side: 'Right'
        },
        {   A: 'Neon',
            Number: 10,
            Name: 'Ne',
            Side: 'Right'
        },
    ];

    // separate elements based on position in table
    const left = elementsTwo.filter(element => {
        return element.Side == 'Left'
    });
    const right = elementsTwo.filter(element => {
        return element.Side == 'Right'
    });

    // what to display
    return (
        <div className='container'>
            <div className='d-flex justify-content-md-between'>
            {/* flex the left and right sides of table */}
                <div className='left d-flex'>
                    {
                        left.map(item => {
                            return <div key={item.A} className='border border-dark element'>
                                        
                                            <h4>{item.Number}</h4>
                                            <h4>{item.Name}</h4>
                                        
                                    </div>
                        })
                    }
                </div>
                <div className='right d-flex'>
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
        </div>
    )
}

export default RowTwo;