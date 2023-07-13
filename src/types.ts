export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface IPosts {
    posts: IPost[]
}

export interface IPostProps {
    title: string,
    body: string,
    id: number,
}

export interface IPaginationProps {
    activePage: number,
    allPages: number,
    changeActivePage: (page: number) => void,
}