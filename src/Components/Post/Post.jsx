import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
    return (
        <div className="post">
        <Link className="link" to="/post/:postId">
        <img className="postImg"
                src="https://images.pexels.com/photos/352096/pexels-photo-352096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
            />
        </Link>
           

        <div className="postInfo">
                <div className="postCats">
                <span className="postCat">    
                    Music    
                </span>
                <span className="postCat">
                    Life        
                </span>
                </div>
                <span className="postTitle">
                    <Link className="link" to="/post/:postId">Lorem ipsum dolor sit amet</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
                </div>
    )
}
