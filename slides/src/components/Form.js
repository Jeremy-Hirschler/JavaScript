import React, {useState} from 'react'
import axios from 'axios';

const Form = () => {
    const [loaded, setLoaded] = useState(false)
    const [option, setOption] = useState('title')
    const [userSearch, setUserSearch] = useState('')
    const [books, setBooks] = useState({});
    
    const Lookup = (e) => {

        //split into array and loop thru to concat api call

        e.preventDefault();
        let searchTerms = userSearch.split(' ')
        // console.log(searchTerms)
        let x = encodeURIComponent(JSON.stringify(searchTerms))
        console.log(x)
        console.log('lookup function before axios')
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${x}:keyes&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=> {
            console.log('yay', res.data.items)
            setBooks(res.data.items)
            setLoaded(true)
        })
        .catch((err)=> {
            console.log('boo',err)
        })

    }


    return (
        <div className='d-flex flex-column border border-dark container'>
            <div className='bar row'>

                <h2 className='col-12 col-sm-12 col-md-12 col-lg-12'>What do you want to Book Up?</h2>
                <form onSubmit={Lookup} className='d-flex justify-content-around mx-auto border border-dark col-12 col-sm-12 col-md-10 col-lg-8'>
                    <select onChange={(e)=>setOption(e.target.value)}>
                        <option value='title'>Search By Title</option>
                        <option value='author'>Search By Author</option>
                        <option value='genre'>Search By Genre</option>
                    </select>
                    <input 
                        type='text' 
                        value={userSearch}
                        onChange={(e)=>{setUserSearch(e.target.value)}}
                        />
                    <button className='btn btn-warning'>Search</button>
                    {/* <button className='btn btn-warning'>Recommend a book!</button> */}
                </form>
            </div>
            {
                loaded==true?
                books.map((item, index) => {
                    return <div className='list row'>
                                <ul key={index} className='d-flex justify-content-around mx-auto border border-dark col-12 col-sm-12 col-md-10 col-lg-8'>
                                    <li>Title: {item.volumeInfo.title}</li>
                                    <li>Author: {item.volumeInfo.authors[0]}</li>
                                </ul>
                            </div>
                }):null
            }
            <div className='list row'>

                <ul className='d-flex justify-content-around mx-auto border border-dark col-12 col-sm-12 col-md-10 col-lg-8'>

                    <li >Test ttle</li>
                    <li>Test author</li>
                </ul>
            </div>
        </div>
    )
}

export default Form
