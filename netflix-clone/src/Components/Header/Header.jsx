

 import NetflixLogo from "../../assets/Images/Netflix_logo.svg"; // adjust path if needed
 import SearchIcon from '@mui/icons-material/Search';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../Header.css"
const Header = () => {
  return (
    <div className="header_container">
      {/* Left side: logo and menu */}
      <div className="header_left">
        <ul>
          <li>  <img src={NetflixLogo} alt=""  NetflixLogo /> </li>
           
        
          <li>Netflix</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right side: icons */}
      { <div className="header_right">
        <ul>
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
        </ul>
      </div> }
    </div>
  );
};

export default Header;
