import React from 'react'

const Form = () => {

    const Lookup = () => {
        console.log('p')
    }


    return (
        <div className='d-flex flex-column border border-dark'>
            <h2>What do you want to Book Up?</h2>
            <form onSubmit={Lookup()} className='d-flex border border-dark w-50 mx-auto justify-content-evenly'>
                <select>
                    <option>Search By Title</option>
                    <option>Search By Author</option>
                    <option>Search By Genre</option>
                </select>
                <button className='btn btn-warning'>Search</button>
            </form>
        </div>
    )
}

export default Form
