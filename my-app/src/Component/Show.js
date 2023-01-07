import React, { useState } from "react";
import axios from "axios";

const Show = ({ result,nexts }) => {
  
 
  

  return (
    <div>
      <div className="container">
        <div className="row">
          {  result?.map((item, i) => {
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
  );
};

export default Show;
