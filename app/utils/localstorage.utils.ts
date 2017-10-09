import { SecureStorage } from "nativescript-secure-storage";
let SecureStorageService = new SecureStorage();

export function setLocalStorage(key: string, value: string): void {
    SecureStorageService.setSync({
        key: key,
        value: value
    });
}

export function getLocalStorage(key: string): string {
    return SecureStorageService.getSync({
        key: key
    });
}

export function clearLocalStorage(): boolean {
    return SecureStorageService.removeAllSync();
}