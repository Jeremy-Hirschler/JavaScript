import React from 'react'

const RowThree = () => {
    const elements = 
    {
        Hydrogen: {
            Number: 1,
            Name: 'H',
        },

        Helium: {
            Number: 2,
            Name: 'He'
        }
    }


    return (
        <div className='container border border-danger'>
            <div className='row justify-content-md-between'>

            {/* <div className='row justify-content-md-between'>
                <div className='hydrogen element'>
                <h4>{elements.Hydrogen.Number}</h4>
                <h4>{elements.Hydrogen.Name}</h4>
                </div>
                <div className='helium element'>
                <h4>2</h4>
                <h4>He</h4>
                </div>
            </div> */}

            {
                Object.entries(elements).map(item => {
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