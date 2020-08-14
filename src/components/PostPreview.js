import React from 'react';
import PropTypes from 'prop-types';

const DisabledButton = () => (
  <button type="button" disabled className="bg-gray-200 p-2 text-center block font-semibold h-10 rounded-md">Coming Soon</button>
);

const PostPreview = ({ post }) => (
  <div className="bg-white mt-5 lg:px-8 md:px-6 px-4 pt-8 pb-4 shadow-md w-full">
    {!!post.image
    && (
    <div className="h-40 my-5">
      <img className="w-full h-full rounded-lg object-scale-down object-center" src={`/${post.image}`} alt="preview" />
    </div>
    )}
    <span className="text-xl font-semibold">{post.title}</span>
    <div className="mt-2 ml-2 w-11/12">
      <p>{post.description}</p>
    </div>
    <div className="flex mt-5 justify-end">
      {post.released
        ? (
          <a
            type="button"
            href={post.url}
            className="bg-blue-500 transition duration-500 ease-in-out hover:scale-105 hover:bg-blue-400 transform p-2 w-24 text-center block text-white font-semibold h-10 rounded-md"
          >
            Read
          </a>
        )
        : <DisabledButton />}
    </div>
  </div>
);

PostPreview.propTypes = {
  post: PropTypes.exact({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    released: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
