import { useState } from "react";
import "./createnewpost.css";

function CreateNewPost({ posts, setPosts }) {
  const [post, setPost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = posts[posts.length - 1].id + 1;
    setPosts([...posts, { id: newId, text: post }]);
    setPost("");
  };
  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit}>
        <div className='container-textarea'>
          <textarea
            name='post'
            id='post'
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder='Enter post here'
          ></textarea>
        </div>

        <button className='form-button' type='submit'>
          Post
        </button>
      </form>
    </div>
  );
}

export default CreateNewPost;
