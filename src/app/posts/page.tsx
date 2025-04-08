import PostList from '@/components/PostList';

export default function PostsPage() {
  return (
    <div>
      <h1>블로그 글 목록</h1>
      <PostList limit={2} />
    </div>
  );
}
