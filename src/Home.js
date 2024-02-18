import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="My Blogs!" />}
    </div>
  );
}

export default Home;
