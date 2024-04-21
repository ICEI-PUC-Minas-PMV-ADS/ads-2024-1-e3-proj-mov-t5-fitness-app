export interface IFormattedPagingResponseProps<T> {
    total: number;
    skip: number;
    take: number;
    data: Array<T>;
}
