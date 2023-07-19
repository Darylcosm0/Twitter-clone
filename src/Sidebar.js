import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Sidebar() {
  return (
    <div className='sidebar'>
      {/* TwitterIcon */}
      <TwitterIcon />

      {/* sidebar options */}
      <SidebarOption Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={SearchIcon} text='Explore' />
      <SidebarOption Icon={NotificationsIcon} text='Notifications' />
      <SidebarOption Icon={MessageIcon} text='Messages' />
      <SidebarOption Icon={BookmarksIcon} text='Bookmarks' />
      <SidebarOption Icon={ListIcon} text='Lists' /> 
      <SidebarOption Icon={AccountCircleIcon} text='Profile' /> 
      <SidebarOption Icon={MoreHorizIcon} text='More' /> 


      </div>
  );
}

export default Sidebar;
