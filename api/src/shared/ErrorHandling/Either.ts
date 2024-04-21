interface IEither {
    isException(): boolean;
    isSuccess(): boolean;
}

export class Exception<L, R> implements IEither {
    constructor(readonly exception: L) {}

    public isException(): this is Exception<L, R> {
        return true;
    }

    public isSuccess(): this is Success<L, R> {
        return false;
    }
}

export class Success<L, R> implements IEither {
    constructor(readonly success: R) {}

    public isException(): this is Exception<L, R> {
        return false;
    }

    public isSuccess(): this is Success<L, R> {
        return true;
    }
}

export type Either<L, R> = Exception<L, R> | Success<L, R>;

export const error = <L, R>(l: L): Either<L, R> => {
    return new Exception(l);
};

export const success = <L, R>(r: R): Either<L, R> => {
    return new Success(r);
};
