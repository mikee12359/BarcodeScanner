"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ModalCheckInComponent = (function () {
    function ModalCheckInComponent(_params) {
        this._params = _params;
        this.context = {};
        this.context = _params.context;
    }
    ModalCheckInComponent.prototype.checkIn = function () {
        this._params.closeCallback(true);
    };
    ModalCheckInComponent.prototype.close = function () {
        this._params.closeCallback(false);
    };
    ModalCheckInComponent = __decorate([
        core_1.Component({
            templateUrl: "page/modal-check-in/modal-check-in.component.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ModalCheckInComponent);
    return ModalCheckInComponent;
}());
exports.ModalCheckInComponent = ModalCheckInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY2hlY2staW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwtY2hlY2staW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQUt0RTtJQUdJLCtCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUY5QyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBR2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBYlEscUJBQXFCO1FBSGpDLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUsbURBQW1EO1NBQ25FLENBQUM7eUNBSStCLGdDQUFpQjtPQUhyQyxxQkFBcUIsQ0FjakM7SUFBRCw0QkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZS9tb2RhbC1jaGVjay1pbi9tb2RhbC1jaGVjay1pbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ2hlY2tJbkNvbXBvbmVudCB7XG4gICAgY29udGV4dDogYW55ID0ge307XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyBcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gX3BhcmFtcy5jb250ZXh0O1xuICAgIH1cblxuICAgIGNoZWNrSW4oKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKHRydWUpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhmYWxzZSk7XG4gICAgfVxufSJdfQ==