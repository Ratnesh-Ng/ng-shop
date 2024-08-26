import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface HttpRequestOptions {
    busy?: boolean,
    errorMessage?: string,
    successMessage?: string,
}

export interface INotification {
    type: "error" | "success";
    message: string;
}

export const isBusy: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
export const notification: Subject<INotification> = new Subject<INotification>();

export const postData = <T>(observable: Observable<T>, options?: HttpRequestOptions): Promise<T> => {
    if (options?.busy) {
        isBusy.next(true);
    }
    return new Promise<T>((resolve, reject) => {
        observable.subscribe({
            next: (value) => {
                resolve(value)
                isBusy.next(false);
                if (options?.successMessage) {
                    notification.next({ message: options.successMessage, type: 'success' })
                }
            },
            error: (err) => {
                reject(err)
                isBusy.next(false);
                if (options?.errorMessage) {
                    notification.next({ message: options.errorMessage, type: 'error' })
                }
            },
        });
    });
};

export const getData = postData;