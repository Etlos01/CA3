import React, { useEffect, useState } from "react";
import {DogJpgUrl} from "./../sites";

const url = DogJpgUrl;

const Dogs = () => {
    const [dogs, setDogs] = useState({});
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDogs(data);
        });
    }, []);
return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <div>
        <h2>Her er en hund</h2 >
      <img src={dogs.message} alt="There was suposed to be a dog here..." height={560} width={700} />
      </div>
    </div>
  );
};

export default Dogs;
