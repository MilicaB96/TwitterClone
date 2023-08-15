import { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./posts.css";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
function Posts(prop) {
  const [posts, setPosts] = useState(prop.posts);
  return (
    <div>
      <CreateNewPost posts={posts} setPosts={setPosts} />
      <div className='posts-container'>
        {posts && posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    </div>
  );
}

export default Posts;
