import React from 'react'
import Body from './Body'
import './Player.css'
import Sidebar from './Sidebar'
import Footer from "./Footer"
import { useDataLayerValue } from './DataLayer'

function Player( {spotify}) {

  const [{ track }, dispatch] = useDataLayerValue();

  return (
    <div className='player'>
      <div className="player__body">
        <Sidebar/>
        <Body spotify={spotify} />
      </div>
      <Footer/>
    </div>
  )
}

export default Player