import React from "react";
import { Pagination as BsPagination, PaginationItem, PaginationLink } from 'reactstrap';

function Pagination({pages}) {
    return(
        <BsPagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            {Array(pages)
                .fill(pages)
                .map((page, index) => <PaginationItem><PaginationLink href="#">{index + 1}</PaginationLink>
            </PaginationItem>)}
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </BsPagination>
    )
}

export default Pagination;