import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './Spotify';
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();
const userId = "31iqgspgnvg2dngw237qf656wjci";

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      console.log(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getPlaylist('6ehdSiG3d2TinBXr1r7ZK0').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });

      spotify.getTrack("4T2dHb8XBYHlVj7Dyo1cW9").then(track => {
        dispatch({
          type: "SET_TRACK",
          track: track
        })
      })

    }

  }, []);

  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify} />)
          :
          (<Login />)
      }

    </div>
  );
}

export default App;
