import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Main = () => {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=> {
        
        
    },[])



    
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