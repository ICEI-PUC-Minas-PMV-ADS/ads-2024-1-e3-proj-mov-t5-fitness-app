import { IPromiseQueueProps, ITasks } from './interfaces';

export class PromiseQueue<T> {
    private total: number;
    private todo: Array<ITasks<T>>;
    private running: Array<ITasks<T>>;
    private complete: Array<T>;
    private count: number;
    private intervalBetweenReq: number;

    constructor({
        tasks = [],
        tasksPerRequisition = 100,
        intervalBetweenReq = 1000, // Aguarda por padrão 1s
    }: IPromiseQueueProps<T>) {
        this.total = tasksPerRequisition;
        this.todo = tasks;
        this.running = [];
        this.complete = [];
        this.count = tasksPerRequisition;
        this.intervalBetweenReq = intervalBetweenReq;
    }

    private runNext() {
        return this.running.length < this.count && this.todo.length;
    }

    private delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    public async execute() {
        await this.delay(this.intervalBetweenReq);

        while (this.runNext()) {
            const promise = this.todo.shift();

            await promise()
                .then((response) => {
                    this.running.shift();

                    this.complete.push(response);

                    if (this.complete.length === this.total) {
                        this.total = this.total + this.count;
                        this.execute();
                    }
                })
                .catch((error) => {
                    console.log(error);
                    new Error(error);
                });

            this.running.push(promise);
        }

        return this.complete;
    }
}
