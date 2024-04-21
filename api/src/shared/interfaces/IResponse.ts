export type IResponse<T> = T;

export interface IPaginationResponse<T> {
    data?: Array<T>;
    meta?: {
        total: number;
        lastPage: number;
        currentPage: number;
        perPage: number;
        prev?: number;
        next?: number;
    };
}
