import { useEffect, useState } from 'react'
import axios from "axios";

import './App.css'


function App() {

  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
      .then(response => {
        setCharacters(response.data);
      })
      .catch((e) => {
        console.log("error getting characters from the API....", e);
      });
  }, []);


  const renderList = () => {
    return characters.map((characterObj, index) => {
          return (
            <div key={index} >
              <h3>{characterObj.name}</h3>
              <p>{characterObj.occupation}</p>
            </div>
          )
        })
  }


  return (
    <>
      { characters && <h2>Number of characters in the API: {characters.length}</h2>}

      {
        characters === null
          ? <p>loading....</p>
          : renderList()
      }
    </>
  )
}

export default App
