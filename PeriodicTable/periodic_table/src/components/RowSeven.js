import React from 'react'

const RowSeven = () => {
    const elementsFour = 
    [
        {   A: 'Francium',
            Number: 87,
            Name: 'Fr',
            Side: 'Left'
        },

        {   A: 'Radium',
            Number: 88,
            Name: 'Ra',
            Side: 'Left'
        },
        // {   A: 'Actinium',
        //     Number: 89,
        //     Name: 'Ac',
        //     Side: 'Right'
        // },
        {   A: 'Rutherfordium',
            Number: 104,
            Name: 'Rf',
            Side: 'Right'
        },
        {   A: 'Dubnium',
            Number: 105,
            Name: 'Db',
            Side: 'Right'
        },
        {   A: 'Seaborgium',
            Number: 106,
            Name: 'Sg',
            Side: 'Right'
        },
        {   A: 'Bohrium',
            Number: 107,
            Name: 'Bh',
            Side: 'Right'
        },
        {   A: 'Hassium',
            Number: 108,
            Name: 'Hs',
            Side: 'Right'
        },
        {   A: 'Meitnerium',
            Number: 109,
            Name: 'Mt',
            Side: 'Right'
        },
        {   A: 'Darmstadium',
            Number: 110,
            Name: 'Ds',
            Side: 'Right'
        },
        {   A: 'Roentgenium',
            Number: 111,
            Name: 'Rg',
            Side: 'Right'
        },
        {   A: 'Copernicium',
            Number: 112,
            Name: 'Cn',
            Side: 'Right'
        },
        {   A: 'Nihonium',
            Number: 113,
            Name: 'Nh',
            Side: 'Right'
        },
        {   A: 'Flerovium',
            Number: 114,
            Name: 'Fl',
            Side: 'Right'
        },
        {   A: 'Moscovium',
            Number: 115,
            Name: 'Mc',
            Side: 'Right'
        },
        {   A: 'Livermorium',
            Number: 116,
            Name: 'Lv',
            Side: 'Right'
        },
        {   A: 'Tennessine',
            Number: 117,
            Name: 'Ts',
            Side: 'Right'
        },
        {   A: 'Oganesson',
            Number: 118,
            Name: 'Og',
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

export default RowSeven;