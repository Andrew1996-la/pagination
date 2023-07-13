import Post from "../post/Post"
import { IPosts, IPost } from "../../types"
import s from './listPosts.module.css'

const ListPosts = ({posts}: IPosts) => {

  const postElem = posts.map((post: IPost) => {
    return (
      <Post 
      id={post.id}
      key={post.id}
      body={post.body}
      title={post.title}/>
    )
  })

  return (
    <ul className={s.posts}>
      {postElem}
    </ul>
  )
}

export default ListPosts