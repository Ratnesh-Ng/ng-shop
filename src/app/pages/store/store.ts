import { Subject } from "rxjs";

class TimeOption {
    public hours?: number;
    public minutes?: number;
    public seconds?: number;
}

export class StoreOptions {
    public refreshAfter?: TimeOption;
}

export class Store<T> extends StoreOptions {
    private _data!: T;
    private _options?: StoreOptions;
    public readyToRefresh?: boolean;
    public refreshEvent: Subject<void> = new Subject<void>();
    public updatedAt?: Date;
    private _timeoutId?: NodeJS.Timeout;

    constructor(data: T, options?: StoreOptions) {
        super();
        this._options = options;
        this.data = data;
    }

    get data() {
        return this._data;
    }

    set data(val: T) {
        this._data = val;
        this.updatedAt = new Date();
        this.readyToRefresh = false;
        if (this._options?.refreshAfter) {
            clearTimeout(this._timeoutId);
            this.setNextFetchTimeout(this._options.refreshAfter);
        }
    }

    private setNextFetchTimeout(time: TimeOption) {
        const { hours, minutes, seconds } = time;
        // Calculate interval in milliseconds
        let intervalMs = ((hours || 0) * 60 * 60 + (minutes || 0) * 60 + (seconds || 0)) * 1000;
        if (intervalMs) {
            this._timeoutId = setTimeout(() => {
                this.readyToRefresh = true
                this.refreshEvent.next();
            }, intervalMs);
        }
    }
}