import './App.css';
import ListPosts from './components/listPosts/ListPosts';
import Pagination from './components/pagination/Pagination';
import { IPost } from './types';

import {useState, useEffect} from 'react'

function App() {
  const GET_POSTS_COUNT = 5;
  const allPages = 10;
  const [posts, setPosts] = useState<IPost[]>([]);
  const [activePage, setActivePage] = useState<number>(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${activePage}&_limit=${GET_POSTS_COUNT}`)
      .then(res => res.json())
      .then(res => setPosts(res))
  }, [activePage])

  const changeActivePage = (page: number) => {
    setActivePage(page)
  }

  return (
    <div className="App">
      <ListPosts posts={posts}/>
      <Pagination 
        allPages={allPages}
        activePage={activePage}
        changeActivePage={changeActivePage}/>
    </div>
  );
}

export default App;