import { 
    FlashOn as FlashOnIcon,
    Home as HomeIcon, 
    LiveTv as LiveTvIcon, 
    PersonOutline as PersonOutlineIcon, 
    Search as SearchIcon, 
    VideoLibrary as VideoLibraryIcon 
} from '@material-ui/icons';
import React from 'react';
import './header.css';

const Header = ()=>{
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon header-icon-active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>

                <div className="header-icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>

                <div className="header-icon">
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>

                <div className="header-icon">
                    <VideoLibraryIcon/>
                    <p>Collections</p>
                </div>

                <div className="header-icon">
                    <SearchIcon/>
                    <p>Search</p>
                </div>

                <div className="header-icon">
                    <PersonOutlineIcon/>
                    <p>Account</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt=""/>
        </div>
    )
}

export default Header;