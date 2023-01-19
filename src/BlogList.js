import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const data = blogs.blogs;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {data.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written By : {blog.snippet}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
