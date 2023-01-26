import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
    useEffect(() => {
        document.title = "Minecraft Revolution";
    }, []);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = event => {
        setScrollPosition(event.target.scrollTop);
    };

    const [posts, setPosts] = useState([]);
    var options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:80/api/posts");
            const data = await res.json();
            setPosts(data);
        }

        fetchData();
    }, []);

    const reversedPosts = [...posts].reverse();

    return (
        <>
            <div className="overflow-y-scroll h-full">
                <div
                    style={{ marginRight: `-${scrollPosition}px` }}
                    className="relative">
                    {reversedPosts.map(post => (
                        <div key={post.id} className="post col-md-6 text-start">
                            <div className=" container">
                                <label className="text-lg font-bold mr-2">
                                    {post.name}
                                </label>
                                <small className="date">
                                    {new Date(post.created_at).toLocaleString(
                                        "ua-UK",
                                        options
                                    )}
                                </small>
                            </div>
                            <p className="description">{post.description}</p>
                            <div id="manageButtons">
                                <Link to={`/posts/${post.id}`}>
                                    <button
                                        type="button"
                                        className="text-buttons-normal">
                                        Подивитись повністю
                                    </button>
                                </Link>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
                <div
                    className="bg-gray-300 absolute right-0 top-0 bottom-0 w-4"
                    onScroll={handleScroll}></div>
            </div>
            {/*reversedPosts.map(post => (
                <div key={post.id} className="post col-md-6 text-start">
                    <h2>{post.name}</h2>
                    <p className="description">{post.description}</p>
                    <div id="manageButtons">
                        <Link to={`/posts/${post.id}`}>
                            <button type="button" className="btn btn-primary">
                                Подивитись повністю
                            </button>
                        </Link>
                    </div>
                    <small className="date">
                        {new Date(post.created_at).toLocaleString(
                            "ua-UK",
                            options
                        )}
                    </small>
                    <hr />
                </div>
                        ))*/}
        </>
    );
};

export default Main;
