import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      {/* <SidebarRow icon={VideoLibraryIcon} title="Library" />
      <SidebarRow icon={HistoryIcon} title="History" />
      <SidebarRow icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow icon={ThumbUpIcon} title="Liked videos" /> */}

    </div>
  )
}

export default Sidebar;
