import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import { useDataLayerValue } from './DataLayer';



function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className='sidebar__logo' src="https://community.spotify.com/t5/image/serverpage/image-id/27289i6CB37DCE3D36368E?v=v2" alt="" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}

    </div>
  )
}

export default Sidebar