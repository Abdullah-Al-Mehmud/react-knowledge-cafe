import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover_img,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="px-10 py-10">
      {/* cover image */}

      <img
        className="rounded-xl"
        src={cover_img}
        alt={`cover picture of the ${title}`}
      />

      {/* author info and reading time */}
      <div className="flex justify-between items-center pt-5">
        {/* author */}
        <div className="flex items-center">
          {/* author image */}
          <img className="w-14" src={author_img} alt="" />
          {/* author info */}
          <div className="ml-4">
            <p className="text-xl font-bold">{author}</p>
            <p className="text-sm text-gray-500">{posted_date}</p>
          </div>
        </div>
        {/* reading time */}
        <div className="flex gap-3">
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmarks(blog)}>
            {" "}
            <FaBookmark></FaBookmark>{" "}
          </button>
        </div>
      </div>
      {/* title */}
      <div>
        <h2 className="text-3xl font-bold py-5">{title}</h2>
      </div>

      {/* hashtags */}
      <div>
        <p className="flex gap-4">
          {hashtags.map((hashtag, idx) => (
            <span key={idx}>
              <a href="">#{hashtag}</a>
            </span>
          ))}
        </p>
      </div>
      <div className="pt-4">
        <p
          onClick={() => handleMarkAsRead(reading_time, id)}
          className="text-purple-600 underline font-semibold cursor-pointer">
          Mark as read
        </p>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
