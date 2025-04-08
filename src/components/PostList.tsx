'use client';

import { useEffect, useState } from 'react';

type Props = {
  limit?: number;
};

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostList({ limit = 0 }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, limit || 5)));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
