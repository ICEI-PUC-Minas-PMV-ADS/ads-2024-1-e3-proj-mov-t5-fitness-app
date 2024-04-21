export type ITasks<T> = () => Promise<T>;

export interface IPromiseQueueProps<T> {
    tasks: Array<ITasks<T>>;
    tasksPerRequisition?: number;
    intervalBetweenReq?: number;
}
