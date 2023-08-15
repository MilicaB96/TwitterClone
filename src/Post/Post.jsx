import "./post.css";

function Post({ text }) {
  return (
    <div className='post-container'>
      <p className='post-container-post'>{text}</p>
      <hr />
      <div className='post-container-buttons'>
        <button type='button'>Like</button>
        <button type='button'>Dislike</button>
        <button type='button'>Repost</button>
      </div>
    </div>
  );
}

export default Post;
