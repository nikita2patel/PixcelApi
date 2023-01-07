import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";
import './Style.css'
const Home1 = () => {
  const [result, setResult] = useState([]);
  const [nexts, setnext] = useState([]);
  console.log("next", nexts);
  console.log("rs", result);

  const getapi = () => {
    let url = process.env.REACT_APP_API_KEYS;
    //  if (nexts.next_page) {
    //    url = nexts.next_page;
    //  }

    const access_token = process.env.REACT_APP_API_KEY;
    axios
      .get(url, {
        headers: {
          Authorization: `${access_token}`,
        },
      })
      .then((response) => {
        setResult(response.data.photos);
         setnext(response.data.next_page);
         console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getapi();
  }, []);

  return (
    <div>
      <button  className="save">dark mode</button>
      <Show result={result}/>
      <button onClick={() => getapi("next")}>next</button>
    </div>
  );
};

export default Home1;
