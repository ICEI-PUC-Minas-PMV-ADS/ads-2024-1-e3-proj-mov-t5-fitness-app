export const virtualPaginationArray = <T>(
    array: Array<T>,
    itemsToSkip: number,
    itemsPerPage: number,
) => {
    const startIndex = (itemsToSkip - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
};
