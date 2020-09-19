import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [token,setToken] = useState(null)
  //run code base on a givrn condition

  useEffect(()=>{
    //code...
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token =hash.access_token
    console.log("i have a token ",token)
    if (_token){
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log('🤓',user)
      })
    }

  },[])
  
  return (
    <div className="app">
       {
         token ? (
           <h1>I m logged in</h1>
         ) : (
          <Login/>
         )
       }
       
    </div>
  );
}

export default App;
