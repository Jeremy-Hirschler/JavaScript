import React from 'react'

const RowThree = () => {
    const elementsThree = 
    {
        Sodium: {
            Number: 11,
            Name: 'Na',
        },

        Magnesium: {
            Number: 12,
            Name: 'Mg'
        },
        Aluminum: {
            Number: 13,
            Name: 'Al'
        },
        Silicon: {
            Number: 14,
            Name: 'Si'
        },
        Phosphorus: {
            Number: 15,
            Name: 'P'
        },
        Sulfur: {
            Number: 16,
            Name: 'S'
        },
        Chlorine: {
            Number: 17,
            Name: 'Cl'
        },
        Argon: {
            Number: 18,
            Name: 'Ar'
        },
    }


    return (
        <div className='container border border-danger'>
            <div className='row justify-content-md-between'>

            {
                Object.entries(elementsThree).map(item => {
                    return <div key={item} className={`${item[0]} element`}>
                    
                        <h4>{item[1].Number}</h4>
                        <h4>{item[1].Name}</h4>
                    </div>
                    // console.log({item})
                })
            }
            </div>
        </div>
    )
}

export default RowThree;