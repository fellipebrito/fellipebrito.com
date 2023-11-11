import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostHeader from './PostHeader';
import PostLinkBack from './PostLinkBack';
import { Helmet } from 'react-helmet'; // Import Helmet from react-helmet

const DisplayCurrentURL = () => {
  const { title } = useParams();
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    // Fetch the JSON data and find the post with a matching URL
    fetch('posts.json')
      .then((response) => response.json())
      .then((data) => {
        const matchingPost = data.find((post) => post.metadata.url === title);
        if (matchingPost) {
          setPostContent(matchingPost);
        }
      })
      .catch((error) => console.error('Error loading data:', error));
  }, [title]);

  if (!postContent) {
    return <div>Loading...</div>;
  }

  const addLineSpacing = (html) => {
    return html.replace(/<\/p>/g, '</p><p class="line-spacing-1.5">&nbsp;</p>');
  };

  return (
    <div className="px-4 py-4 pb-1 md:p-8 bg-slate-100">
      <div className="w-full max-w-6xl mx-auto">
        {/* Use Helmet to dynamically update meta tags */}
        <Helmet>
          <title>{postContent.metadata.title}</title>
          <meta name="description" content={postContent.metadata.description} />
          <meta property="og:image" content={`/images/${postContent.metadata.image}`} />
        </Helmet>

        <PostHeader title={postContent.metadata.title} image={postContent.metadata.image} />

        <div
          className="mt-4 text-gray-700"
          dangerouslySetInnerHTML={{ __html: addLineSpacing(postContent.content) }}
        />

        <PostLinkBack />
      </div>
    </div>
  );
};

export default DisplayCurrentURL;