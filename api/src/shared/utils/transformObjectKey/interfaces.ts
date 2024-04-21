type ITypesTransformObjectKey = 'ToUpperCase' | 'ToLowerCase';

export interface ITransformObjectKeyProps {
    objectItem: any;
    typeTransform: ITypesTransformObjectKey;
}
