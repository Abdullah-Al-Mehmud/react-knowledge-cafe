import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h1 className="bg-white mt-5 px-5 py-5 text-xl font-semibold rounded-lg">
        {title}
      </h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
