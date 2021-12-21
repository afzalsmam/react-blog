import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  const currentUser = true;
    return (
      <div className="top">
        <div className='topCenter'>
          <ul className="topList">
            <li className="topListItem"><Link className= "link" to="/">HOME</Link> </li>
            <li className="topListItem"><Link className= "link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className= "link" to="/">CONTACT</Link></li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {currentUser && <li className="topListItem"><Link className= "link" to="/">LOGOUT</Link></li>}
          </ul>  
        </div>

        <div className="topRight">
        {currentUser ? (<Link className="link" to="/settings">
          <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        
        </Link>): (<ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>)}
        <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
        
    );
}
