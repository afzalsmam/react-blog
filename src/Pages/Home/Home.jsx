import Header from "../../Components/Header/Header.jsx";
import Posts from "../../Components/Posts/Posts.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";

import "./home.css";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
