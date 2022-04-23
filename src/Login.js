import React from 'react'
import "./Login.css"
import {loginUrl} from './Spotify'

function Login() {
    return (
        <div className='login'>
            <img src="https://entrackr.com/wp-content/uploads/2021/09/Spotify-800x400.jpg" alt="spotify-logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login