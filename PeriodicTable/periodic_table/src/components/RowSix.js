import React from 'react'

const RowSix = () => {
    const elementsFour = 
    [
        {   A: 'Caesium',
            Number: 55,
            Name: 'Cs',
            Side: 'Left'
        },

        {   A: 'Barium',
            Number: 56,
            Name: 'Ba',
            Side: 'Left'
        },
        // {   A: 'Lanthanum',
        //     Number: 57,
        //     Name: 'La',
        //     Side: 'Right'
        // },
        {   A: 'Hafnium',
            Number: 72,
            Name: 'Hf',
            Side: 'Right'
        },
        {   A: 'Tantalum',
            Number: 73,
            Name: 'Ta',
            Side: 'Right'
        },
        {   A: 'Tungsten',
            Number: 74,
            Name: 'W',
            Side: 'Right'
        },
        {   A: 'Rhenium',
            Number: 75,
            Name: 'Re',
            Side: 'Right'
        },
        {   A: 'Osmium',
            Number: 76,
            Name: 'Os',
            Side: 'Right'
        },
        {   A: 'Iridium',
            Number: 77,
            Name: 'Ir',
            Side: 'Right'
        },
        {   A: 'Platinum',
            Number: 78,
            Name: 'Pt',
            Side: 'Right'
        },
        {   A: 'Gold',
            Number: 79,
            Name: 'Au',
            Side: 'Right'
        },
        {   A: 'Mercury',
            Number: 80,
            Name: 'Hg',
            Side: 'Right'
        },
        {   A: 'Thallium',
            Number: 81,
            Name: 'Tl',
            Side: 'Right'
        },
        {   A: 'Lead',
            Number: 82,
            Name: 'Pb',
            Side: 'Right'
        },
        {   A: 'Bismuth',
            Number: 83,
            Name: 'Bi',
            Side: 'Right'
        },
        {   A: 'Polonium',
            Number: 84,
            Name: 'Po',
            Side: 'Right'
        },
        {   A: 'Astatine',
            Number: 85,
            Name: 'As',
            Side: 'Right'
        },
        {   A: 'Radon',
            Number: 86,
            Name: 'Rn',
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

export default RowSix;