"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ModalCheckOutComponent = (function () {
    function ModalCheckOutComponent(_params) {
        this._params = _params;
        this.context = {};
        this.context = _params.context;
    }
    ModalCheckOutComponent.prototype.checkOut = function () {
        this._params.closeCallback(true);
    };
    ModalCheckOutComponent.prototype.close = function () {
        this._params.closeCallback(false);
    };
    ModalCheckOutComponent = __decorate([
        core_1.Component({
            templateUrl: "page/modal-check-out/modal-check-out.component.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ModalCheckOutComponent);
    return ModalCheckOutComponent;
}());
exports.ModalCheckOutComponent = ModalCheckOutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY2hlY2stb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLWNoZWNrLW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0VBQXNFO0FBS3RFO0lBR0ksZ0NBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBRjlDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFHZCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFiUSxzQkFBc0I7UUFIbEMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSxxREFBcUQ7U0FDckUsQ0FBQzt5Q0FJK0IsZ0NBQWlCO09BSHJDLHNCQUFzQixDQWNsQztJQUFELDZCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlL21vZGFsLWNoZWNrLW91dC9tb2RhbC1jaGVjay1vdXQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENoZWNrT3V0Q29tcG9uZW50IHtcbiAgICBjb250ZXh0OiBhbnkgPSB7fTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IFxuICAgICAgICB0aGlzLmNvbnRleHQgPSBfcGFyYW1zLmNvbnRleHQ7XG4gICAgfVxuXG4gICAgY2hlY2tPdXQoKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKHRydWUpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhmYWxzZSk7XG4gICAgfVxufSJdfQ==