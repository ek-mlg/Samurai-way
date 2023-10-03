import React, {useEffect, useState} from 'react';
import s from "./Pagination.module.css";

type PaginationPropsType = {
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

const Pagination: React.FC<PaginationPropsType> = (props) => {

    const {
        pageSize,
        totalItemsCount,
        currentPage,
        onPageChanged,
        portionSize
    } = props

    const [portionNumber, setPortionNumber] = useState(1)

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

    return (
        <>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>test</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {
                    return <span className={`${currentPage === p && s.selectedPage} ${s.pageNumber}`}
                                 onClick={() => onPageChanged(p)}
                                 key={index}
                    >
                        {p}
                    </span>
                })}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>test2</button>}
        </>
    );
};

export default Pagination;