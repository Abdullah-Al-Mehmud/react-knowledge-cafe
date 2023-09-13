import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 rounded-xl pb-10">
      {/* reading time */}
      <div className="bg-gray-200 text-purple-500 font-bold mt-10 py-5 px-5 rounded-xl">
        <h1 className="text-2xl">Reading Time : {readingTime} min</h1>
      </div>
      {/* bookmarks */}
      <div className=" bg-gray-200 py-10 mt-5 px-5 rounded-xl">
        <h2 className="text-2xl  font-bold mb-5">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.object.isRequired,
};

export default Bookmarks;
