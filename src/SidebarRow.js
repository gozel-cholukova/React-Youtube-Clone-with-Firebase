import React from 'react';
import "./SidebarRow.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function SidebarRow({ Icon, title} ) {
  return (
    <div className="sidebarRow">
      <Icon className="sidebarRow__icon"/>
      <h2 className="sidebarRow__title">{title}</h2> 
             
    </div>
  );
}

export default SidebarRow;
