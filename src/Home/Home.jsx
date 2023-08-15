import { Navigate } from "react-router-dom";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Posts from "../Posts/Posts";

var posts = [
  { id: 1, text: "Lorem ipsum dolor sit amet." },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, facilis!",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae sed in quod placeat totam laborum ullam tempore earum corporis.",
  },
];

function Home({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return (
    <div>
      <Navbar />
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
