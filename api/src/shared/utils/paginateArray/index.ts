import { IPaginateArrayProps } from './interfaces';

export const paginateArray = <T>({
    array,
    itemsPerPage,
}: IPaginateArrayProps<T>): Array<Array<T>> => {
    return array.reduce((oldValue, currentValue, currentIndex) => {
        const index = Math.floor(currentIndex / itemsPerPage);
        const page = oldValue[index] || (oldValue[index] = []);

        page.push();

        return oldValue;
    }, []);
};
