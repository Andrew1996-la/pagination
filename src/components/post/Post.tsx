import { IPostProps } from "../../types"
import s from './posts.module.css'

const Post = ({title, body, id}: IPostProps) => {
  return (
    <li className={s.post} key={id}>
      <span className={s.title}>{title}</span>
      <span className={s.body}>{body}</span>
    </li>
  )
}

export default Post