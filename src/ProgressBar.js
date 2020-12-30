import React from 'react';
import {useState, useEffect} from 'react'

function ProgressBar(props) {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("General");
  useEffect(() => {
    const myInterval = setInterval(()=>{
    
     if (counter>=100) 
     {
      setCounter(100);
      return;
     }
      let rnd=Math.floor(Math.random() * 5) + 1;
      setCounter(counter+rnd);
      if (counter>=41) 
      {
        setName("Uploading");
      }
      if (counter>=75) 
      {
        setName("task Status");
      }
      if (counter>=100)
      {
        clearInterval(myInterval);
      }


    },1000, counter,name);

    // clean up
    return () => {
      clearInterval(myInterval);
    }
  }, [counter,name])

  useEffect(()=>{}, [counter,name]);

  
  return (
    <>
      <div className="box"> <br/><br/>
      <div className="rect"> <p>{name}</p> </div> <br/><br/> 
       <div className="circle"> <p style={{margin:"40px"}}>{counter}%</p></div> 
       <progress id="progress1" value={counter} min="0" max="100"  >  </progress>
       <br/><br/>
       </div>
    </>
  )

}

export default ProgressBar;
