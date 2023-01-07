import React,{useState} from 'react'
import axios from 'axios';

const Serch = () => {
    const [results, setResults] = useState([]);
    console.log('77',results)
    const [search, setserch] = useState();

    const handelclilk = () => {
      const url =   `https://api.pexels.com/v1/search?query=${search}`;
        const access_token =
          "563492ad6f91700001000001fba1ae3d4c944648b46a2d70550f8e5f";
        axios.get(url, {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((response) => {
            setResults(response.data.photos);
            console.log('33',response);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      
  return (
    <div>
        <input type="search" style={{width:"20%",height:"10vh",marginLeft:"30%"}}     placeholder="search here" onChange={(e)=>setserch(e.target.value)} />
      <button onClick={handelclilk}>search</button>
      <div className="container">
        <div className="row">
      {results.map((item, i) => {
            return (
              <>
                <div className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <img
                    className="card-img-top"
                    src={item.src.landscape}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      photographer: {item.photographer}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
    </div>
    </div>
    </div>
  )
}

export default Serch
