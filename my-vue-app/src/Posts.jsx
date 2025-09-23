import { use } from "react";
import Post from "./Post";

export default function Posts({ postsPrmise }) {

  const posts = use(postsPrmise); //* React auto import "use"()
  console.log(posts);

  return (
    <div className="card">
      <h3>All Post Title :{posts.length}</h3>
      {
        posts.map(post => <Post post={post} key={post.id}></Post>)
      }
    </div>
  );
}