import React from 'react';
import s from "./Pagination.module.css";

type PaginationPropsType = {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationPropsType> = (props) => {

    const {pageSize,
        totalUsersCount,
        currentPage,
        onPageChanged} = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            {pages.map((p, index) => {
                return <span className={`${currentPage === p && s.selectedPage} ${s.pageNumber}`}
                             onClick={() => onPageChanged(p)}
                             key={index}
                >
                        {p}
                    </span>
            })}

        </div>
    );
};

export default Pagination;