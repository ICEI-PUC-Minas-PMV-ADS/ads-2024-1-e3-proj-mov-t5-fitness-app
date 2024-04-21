import { ITransformObjectKeyProps } from './interfaces';

export const transformObjectKey = ({
    objectItem,
    typeTransform,
}: ITransformObjectKeyProps) => {
    Object.keys(objectItem).forEach((key) => {
        if (typeTransform === 'ToLowerCase') {
            const keyLowerCase = key.toLowerCase();

            if (keyLowerCase != key) {
                objectItem[keyLowerCase] = objectItem[key];
                delete objectItem[key];
            }
        }

        if (typeTransform === 'ToUpperCase') {
            const keyUpperCase = key.toUpperCase();

            if (keyUpperCase != key) {
                objectItem[keyUpperCase] = objectItem[key];
                delete objectItem[key];
            }
        }
    });

    return objectItem;
};
