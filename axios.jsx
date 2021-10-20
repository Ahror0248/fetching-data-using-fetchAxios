import React, { useState } from 'react'
import axios from 'axios'



const Axios =()=>{
    const [data, setData] = useState([])
    const getData =()=>{
        axios.get("https://api.icndb.com/jokes/random/5")
        // .then(res => console.log(res))
        .then(res => setData(res.data.value))
        .catch(err=> console.log(err))
    }

    return(
        <div>
            <button onClick={getData}>axios</button>
            {
                data.map(value=>{
                  return  <h4 key={value.id} >{value.joke}</h4>
                })
            }
        </div>
    )
} 

export default Axios