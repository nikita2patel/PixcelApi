import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Home2 = () => {
    const [img, setImg] = useState([]);
    console.log('img',img)

    const fetchImage = async () => {

  const url = "https://api.pexels.com/v1/curated?page=2&per_page=40";

    const access_token =
      "563492ad6f91700001000001fba1ae3d4c944648b46a2d70550f8e5f";
    axios
      .get(url, {
        headers: {
          Authorization: `${access_token}`,
        },
      })
      const res = await fetch(url);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };
  
    useEffect(() => {
      fetchImage();
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Home2
