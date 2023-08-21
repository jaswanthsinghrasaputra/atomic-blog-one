import { useContext } from "react";
import { PostContext } from "../App";
import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";

export function Header() {
  // 3) CONSUMING CONTEXT VALUE
  const { onClearPosts } = useContext(PostContext);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
