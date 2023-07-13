import { IPaginationProps } from "../../types"
import s from './pagination.module.css'


const Pagination = ({activePage, allPages, changeActivePage}: IPaginationProps) => {
  
  const pagesElem: number[] = [];
  for(let i=0; i < allPages; i++) {
    pagesElem.push(i+1);
  }


  return (
    <div className={s.btnContainer}>
      {pagesElem.map((page: number) => {
          return (
            <span 
              key={page}
              className={page === activePage ? s.btnActive : s.btn}
              onClick={() => changeActivePage(page)}>
                {page}
            </span>
          )
      })}
    </div>
  )
}

export default Pagination