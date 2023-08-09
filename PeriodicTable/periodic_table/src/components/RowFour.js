import React from 'react'

const RowFour = () => {
    const elementsFour = 
    [
        {   A: 'Potassium',
            Number: 19,
            Name: 'K',
            Side: 'Left'
        },

        {   A: 'Calcium',
            Number: 20,
            Name: 'Ca',
            Side: 'Left'
        },
        {   A: 'Scandium',
            Number: 21,
            Name: 'Sc',
            Side: 'Right'
        },
        {   A: 'Titanium',
            Number: 22,
            Name: 'Ti',
            Side: 'Right'
        },
        {   A: 'Vanadium',
            Number: 23,
            Name: 'V',
            Side: 'Right'
        },
        {   A: 'Chromium',
            Number: 24,
            Name: 'Cr',
            Side: 'Right'
        },
        {   A: 'Manganese',
            Number: 25,
            Name: 'Mn',
            Side: 'Right'
        },
        {   A: 'Iron',
            Number: 26,
            Name: 'Fe',
            Side: 'Right'
        },
        {   A: 'Cobalt',
            Number: 27,
            Name: 'Co',
            Side: 'Right'
        },
        {   A: 'Nickel',
            Number: 28,
            Name: 'Ni',
            Side: 'Right'
        },
        {   A: 'Copper',
            Number: 29,
            Name: 'Cu',
            Side: 'Right'
        },
        {   A: 'Zinc',
            Number: 30,
            Name: 'Zn',
            Side: 'Right'
        },
        {   A: 'Gallium',
            Number: 31,
            Name: 'Ga',
            Side: 'Right'
        },
        {   A: 'Germanium',
            Number: 32,
            Name: 'Ge',
            Side: 'Right'
        },
        {   A: 'Arsenic',
            Number: 33,
            Name: 'As',
            Side: 'Right'
        },
        {   A: 'Selenium',
            Number: 34,
            Name: 'Se',
            Side: 'Right'
        },
        {   A: 'Bromine',
            Number: 35,
            Name: 'Br',
            Side: 'Right'
        },
        {   A: 'Krypton',
            Number: 36,
            Name: 'Kr',
            Side: 'Right'
        },
    ];
    
    const left = elementsFour.filter(element => {
        return element.Side == 'Left'
    });
    const right = elementsFour.filter(element => {
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

export default RowFour;
