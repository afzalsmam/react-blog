import Header from "../../Header/Header.jsx";
import Posts from "../../Posts/Posts.jsx";

import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                
            </div>
        </>
    )
}
