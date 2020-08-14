import React from 'react';
import Helmet from 'react-helmet';
import NavBar from '../components/NavBar';
import PostPreview from '../components/PostPreview';
import posts from '../posts/posts.json';
import '../main.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center lg:w-9/12 mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="pwilms.me blog containing tutorials and general thoughts on current tech" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>PWilms.me- Home</title>
          <link rel="canonical" href="https://pwilms.me" />
        </Helmet>
        <div className="mt-20 md:max-w-screen-sm lg:max-w-screen-lg mx-auto p-4">
          <span className="text-3xl mt-20">
            I
            {' '}
            <span className="font-bold">may</span>
            {' '}
            just write about stuff that
            {' '}
            <span className="font-bold">may or may</span>
            {' '}
            not be interesting...
            {' '}
            <span className="font-bold">may</span>
            be
          </span>
        </div>
        <div className="mt-20 md:max-w-screen-sm lg:max-w-screen-lg mx-auto">
          <span className="underline text-lg">Posts</span>
        </div>

        <div className="mt-10 bg-gray-200 lg:p-10 md:p-5 sm:pb-5 shadow-inner lg:rounded-lg md:max-w-screen-sm lg:max-w-screen-lg mx-auto">
          {posts.map((post) => (
            <PostPreview key={post.url} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
