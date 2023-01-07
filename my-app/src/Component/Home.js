import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Home = () => {
    const [search, setSearch] = useState("");  
    const [perPage, setPerPage] = useState("");  
    const [result, setResult] = useState([]);  
    console.log('result',result)
    useEffect(()=>{
        handelclik()

    },[])
    const handelclik = () =>{
       
      
        // const url = "https://api.pexels.com/v1/search?query"  
       const url =  "https://api.pexels.com/v1/curated?page=2&per_page=40"
       

        const access_token = '563492ad6f91700001000001fba1ae3d4c944648b46a2d70550f8e5f';  
        axios.get(url, {  
            headers: {  
                'Authorization': `${access_token}`  
            }  
        })
       
        //  .then(data => {  
        //      console.log(data);  
        //     setResult(data.data.photos);  
        //  })  
        .then((response)=>{
            setResult(response.data.photos)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    
        
    }
  return (
    <div>
        <button onClick={handelclik}>clilk me</button>
      
    </div>
  )
}

export default Home
