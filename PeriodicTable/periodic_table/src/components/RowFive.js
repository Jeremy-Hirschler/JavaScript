import React from 'react'

const RowFive = () => {
    const elementsFour = 
    [
        {   A: 'Rubidium',
            Number: 37,
            Name: 'Rb',
            Side: 'Left'
        },

        {   A: 'Strontium',
            Number: 38,
            Name: 'Sr',
            Side: 'Left'
        },
        {   A: 'Yttrium',
            Number: 39,
            Name: 'Y',
            Side: 'Right'
        },
        {   A: 'Zirconium',
            Number: 40,
            Name: 'Zr',
            Side: 'Right'
        },
        {   A: 'Niobium',
            Number: 41,
            Name: 'Nb',
            Side: 'Right'
        },
        {   A: 'Molybdenum',
            Number: 42,
            Name: 'Mo',
            Side: 'Right'
        },
        {   A: 'Technetium',
            Number: 43,
            Name: 'Tc',
            Side: 'Right'
        },
        {   A: 'Ruthenium',
            Number: 44,
            Name: 'Ru',
            Side: 'Right'
        },
        {   A: 'Rhodium',
            Number: 45,
            Name: 'Rh',
            Side: 'Right'
        },
        {   A: 'Palladium',
            Number: 46,
            Name: 'Pd',
            Side: 'Right'
        },
        {   A: 'Silver',
            Number: 47,
            Name: 'Ag',
            Side: 'Right'
        },
        {   A: 'Cadmium',
            Number: 48,
            Name: 'Cd',
            Side: 'Right'
        },
        {   A: 'Indium',
            Number: 49,
            Name: 'In',
            Side: 'Right'
        },
        {   A: 'Tin',
            Number: 50,
            Name: 'Sn',
            Side: 'Right'
        },
        {   A: 'Antimony',
            Number: 51,
            Name: 'Sb',
            Side: 'Right'
        },
        {   A: 'Tellurium',
            Number: 52,
            Name: 'Te',
            Side: 'Right'
        },
        {   A: 'Iodine',
            Number: 53,
            Name: 'I',
            Side: 'Right'
        },
        {   A: 'Xenon',
            Number: 54,
            Name: 'Xe',
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

export default RowFive;