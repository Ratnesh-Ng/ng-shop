import { Observable } from 'rxjs';

export const postData = <T>(observable: Observable<T>): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        observable.subscribe({
            next: (value) => resolve(value),
            error: (err) => reject(err),
        });
    });
};

export const getData = <T>(observable: Observable<T>): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        observable.subscribe({
            next: (value) => resolve(value),
            error: (err) => reject(err),
        });
    });
};