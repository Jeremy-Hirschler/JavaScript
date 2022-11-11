import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Main = () => {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    // useEffect(()=> {
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=great+intitle:gatsby&key=AIzaSyD3CGNRmMnLGSyyzufMmphwyfV3XuXKPK0')
    //     .then((res)=> {
    //         console.log(res.data.items[0].volumeInfo.title)
    //         setData(res.data.items[0].volumeInfo.title)
    //         setLoaded(true)
    //     })
    //     .catch((err)=> {
    //         console.log('womp', err)
    //     })
    // }, [])

    return (
        <div>
            {
                loaded==true?
                <h2>{data}</h2>:<h2>Waiting..</h2>
            }
            <h2>Testy</h2>
        </div>
    )
}

export default Main