import { SecureStorage } from "nativescript-secure-storage";
var SecureStorageService = new SecureStorage();

export function setLocalStorage(key: string, value: string): Promise<any> {
    return new Promise((resolve, reject) => {
        SecureStorageService.set({
            key: key,
            value: value
        }).then(resolve);
    });
}

export function getLocalStorage(key: string): string {
    return SecureStorageService.getSync({
        key: key
    });
}

export function clearLocalStorage(key: string): void {
    SecureStorageService.remove({
        key: key
    }).then(response => {
        console.log("Remove successfully");
    })
}