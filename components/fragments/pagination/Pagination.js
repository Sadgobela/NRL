import React from "react";
import {Pagination as BsPagination, PaginationItem, PaginationLink} from 'reactstrap';

function Pagination({pages, page, onChange}) {

    const onPageChange = (newPage, e) => {
        e && e.preventDefault();
        if (newPage < 1 || page === newPage || pages < newPage) {
            return false;
        }
        onChange(newPage);
    };

    return (
        <BsPagination aria-label="Page navigation">
            <PaginationItem disabled={page === 1}>
                <PaginationLink onClick={(e) => {
                    onPageChange(page - 1, e);
                }} previous href="#"/>
            </PaginationItem>
            {Array(pages)
                .fill(pages)
                .map((p, index) => <PaginationItem active={(index + 1) === page}>
                    <PaginationLink href="#" onClick={(e) => {
                        onPageChange(index + 1, e);
                    }}>{index + 1}</PaginationLink>
                </PaginationItem>)}
            <PaginationItem disabled={page === pages}>
                <PaginationLink onClick={(e) => {
                    onPageChange(page + 1, e);
                }} next href="#"/>
            </PaginationItem>
        </BsPagination>
    )
}

export default Pagination;