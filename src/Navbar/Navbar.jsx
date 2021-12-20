import "./navbar.css"

export default function Navbar() {
    return (
      <div className="top">
        <div className='topCenter'>
          <ul className="topList">
            <li className="topListItem"><a href="#">HOME</a> </li>
            <li className="topListItem"><a href="#">ABOUT</a></li>
            <li className="topListItem"><a href="#">CONTACT</a></li>
            <li className="topListItem"><a href="#">WRITE</a></li>
            <li className="topListItem"><a href="#">LOGOUT</a></li>
          </ul>  
        </div>

        <div className="topRight">
        <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
        
    );
}
