"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
var SecureStorageService = new nativescript_secure_storage_1.SecureStorage();
function setLocalStorage(key, value) {
    return new Promise(function (resolve, reject) {
        SecureStorageService.set({
            key: key,
            value: value
        }).then(resolve);
    });
}
exports.setLocalStorage = setLocalStorage;
function getLocalStorage(key) {
    return SecureStorageService.getSync({
        key: key
    });
}
exports.getLocalStorage = getLocalStorage;
function clearLocalStorage(key) {
    SecureStorageService.remove({
        key: key
    }).then(function (response) {
        console.log("Remove successfully");
    });
}
exports.clearLocalStorage = clearLocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWxzdG9yYWdlLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkVBQTREO0FBQzVELElBQUksb0JBQW9CLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7QUFFL0MseUJBQWdDLEdBQVcsRUFBRSxLQUFhO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztZQUNyQixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCwwQ0FPQztBQUVELHlCQUFnQyxHQUFXO0lBQ3ZDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDaEMsR0FBRyxFQUFFLEdBQUc7S0FDWCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsMENBSUM7QUFFRCwyQkFBa0MsR0FBVztJQUN6QyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDeEIsR0FBRyxFQUFFLEdBQUc7S0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFORCw4Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3VyZVN0b3JhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNlY3VyZS1zdG9yYWdlXCI7XG52YXIgU2VjdXJlU3RvcmFnZVNlcnZpY2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBTZWN1cmVTdG9yYWdlU2VydmljZS5zZXQoe1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSkudGhlbihyZXNvbHZlKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlY3VyZVN0b3JhZ2VTZXJ2aWNlLmdldFN5bmMoe1xuICAgICAgICBrZXk6IGtleVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBTZWN1cmVTdG9yYWdlU2VydmljZS5yZW1vdmUoe1xuICAgICAgICBrZXk6IGtleVxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92ZSBzdWNjZXNzZnVsbHlcIik7XG4gICAgfSlcbn0iXX0=