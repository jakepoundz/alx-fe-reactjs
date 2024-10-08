import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
const PostsComponent = () => {
  const [isError, setIsError] = useState(false);
  const { isLoading, data, error, refetch } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .catch((err) => {
        setIsError(true);
        throw err;
      }),
    {
      // Configuration options 
      cacheTime: 1000 * 60 * 5, // Cache for 5 minutes (in milliseconds)
      staleTime: 1000 * 60 * 1, // Consider data stale after 1 minute (in milliseconds)
      refetchOnWindowFocus: true, // Refetch when the window gains focus
      keepPreviousData: true, // Keep the previous data while fetching
    }
  );
  // Function to re-fetch data
  const fetchPosts = () => {
    refetch(); 
  };
  if (isLoading) {
    return <div>Loading posts...</div>;
  }
  if (isError) {
    return <div>Error fetching posts. Please try again later.</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={fetchPosts}>Refresh Posts</button>
    </div>
  );
};
export default PostsComponent;