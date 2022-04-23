import React from 'react'
import "./SongRow.css"

function SongRow({track}) {
  return (
    <div className='songRow'>
        <img className='songRow__album' src={track.album.images[0].url} alt="" />
        <div className="songRow__info">
            <h1>{track.name}</h1>
            {console.log(track)}
            <p>
               { track.artists.map((artist)=> artist.name).join(", ")}-{" "}
            </p>
            
            

        </div>
        <div className="songRow__info_album">
        <p>
            {track.album.name}
            </p>
        </div>
        <div className="songRow__info_duration">
          <p>
              {Math.floor(track.duration_ms/60000)}
              :
              {((track.duration_ms%60000)/1000).toFixed(0)}
            </p>
        </div>

    </div>
  )
}

export default SongRow