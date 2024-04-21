import { IPaginationResponse } from 'src/shared/interfaces';
import { IFormattedPagingResponseProps } from './interfaces';

export const formattedPagingResponse = <T>({
    total,
    take,
    skip,
    data,
}: IFormattedPagingResponseProps<T>): IPaginationResponse<T> => {
    try {
        const totalPages = total / take;
        const currentPage = skip / take;

        const existNextPage = currentPage === totalPages;

        return {
            data,
            meta: {
                total: total,
                lastPage: currentPage - 1,
                currentPage: currentPage,
                perPage: take,
                prev: currentPage === 0 ? null : currentPage - 1,
                next: existNextPage ? currentPage + 1 : null,
            },
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
