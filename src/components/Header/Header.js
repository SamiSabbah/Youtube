import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            alt="YouTube icon"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          />
        </Link>
      </div>
      <div className="header__search">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="haeder__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="your pic"
          src="https://scontent.fgza4-1.fna.fbcdn.net/v/t31.0-1/c0.10.160.160a/p160x160/28947155_1379090628903098_4559679110454895141_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=dh1Dvjpwl6IAX_1fOqE&_nc_ht=scontent.fgza4-1.fna&tp=27&oh=47365b3dd6277b8711e4835cd5fbeb05&oe=606C6EEC"
        />
      </div>
    </div>
  );
};

export default Header;
