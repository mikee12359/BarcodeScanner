"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_check_in_component_1 = require("../modal-check-in/modal-check-in.component");
var localstorage_utils_1 = require("../../utils/localstorage.utils");
var BarcodeScannerPageComponent = (function () {
    // data: string;
    function BarcodeScannerPageComponent(_modalService, _vcRef) {
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this.myItems = [];
        this.barcodeScanner = new nativescript_barcodescanner_1.BarcodeScanner();
    }
    BarcodeScannerPageComponent.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            beepOnScan: true,
            resultDisplayDuration: 500,
            orientation: "portrait",
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then(function (result) {
            var value = JSON.parse(result.text);
            //put algo here
            console.dir(_this.myItems);
            _this.showModalCheckIn(value);
        }, function (errorMessage) {
            console.log("Error when scanning " + errorMessage);
        });
    };
    BarcodeScannerPageComponent.prototype.ngOnInit = function () {
        // setLocalStorage("items", "");
        var fetchItems = (JSON.parse(localstorage_utils_1.getLocalStorage("items")) || []);
        console.dir(fetchItems);
        this.myItems = fetchItems;
    };
    BarcodeScannerPageComponent.prototype.showModalCheckIn = function (value) {
        var _this = this;
        var options = {
            context: value,
            fullscreen: false,
            viewContainerRef: this._vcRef
        };
        this._modalService.showModal(modal_check_in_component_1.ModalCheckInComponent, options).then(function (itemCheckIn) {
            if (itemCheckIn) {
                _this.myItems.push(value);
                _this.storeValue(value);
            }
        });
    };
    BarcodeScannerPageComponent.prototype.storeValue = function (value) {
        var items = (JSON.parse(localstorage_utils_1.getLocalStorage("items")) || []);
        items.push(value);
        localstorage_utils_1.setLocalStorage("items", JSON.stringify(items));
    };
    BarcodeScannerPageComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            templateUrl: "page/barcode-scanner-page/barcode-scanner-page.component.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], BarcodeScannerPageComponent);
    return BarcodeScannerPageComponent;
}());
exports.BarcodeScannerPageComponent = BarcodeScannerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyY29kZS1zY2FubmVyLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFyY29kZS1zY2FubmVyLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLDJFQUE2RDtBQUM3RCxrRUFBdUU7QUFDdkUsdUZBQW1GO0FBRW5GLHFFQUFxRztBQU9yRztJQUdJLGdCQUFnQjtJQUNoQixxQ0FBb0IsYUFBaUMsRUFBVSxNQUF3QjtRQUFuRSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUZ2RixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBR3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSw0Q0FBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLDRDQUFNLEdBQWI7UUFBQSxpQkFtQkM7UUFqQkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixVQUFVLEVBQUUsSUFBSTtZQUNoQixxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsZUFBZTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQ0ksQ0FBQztJQUdWLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0ksZ0NBQWdDO1FBQ2hDLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0RBQWdCLEdBQWhCLFVBQWlCLEtBQVU7UUFBM0IsaUJBYUM7UUFaRyxJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDaEMsQ0FBQTtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGdEQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7WUFDekUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0RBQVUsR0FBVixVQUFXLEtBQVU7UUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9DQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN6RCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLG9DQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBdkRRLDJCQUEyQjtRQUp2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLCtEQUErRDtTQUMvRSxDQUFDO3lDQUtxQyxpQ0FBa0IsRUFBa0IsdUJBQWdCO09BSjlFLDJCQUEyQixDQXdEdkM7SUFBRCxrQ0FBQztDQUFBLEFBeERELElBd0RDO0FBeERZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IE1vZGFsQ2hlY2tJbkNvbXBvbmVudCB9IGZyb20gXCIuLi9tb2RhbC1jaGVjay1pbi9tb2RhbC1jaGVjay1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSwgZ2V0TG9jYWxTdG9yYWdlLCBjbGVhckxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi91dGlscy9sb2NhbHN0b3JhZ2UudXRpbHNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZS9iYXJjb2RlLXNjYW5uZXItcGFnZS9iYXJjb2RlLXNjYW5uZXItcGFnZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lclBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGJhcmNvZGVTY2FubmVyOiBhbnk7XG4gICAgbXlJdGVtczogQXJyYXk8YW55PiA9IFtdO1xuICAgIC8vIGRhdGE6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5iYXJjb2RlU2Nhbm5lciA9IG5ldyBCYXJjb2RlU2Nhbm5lcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNjYW4oKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcbiAgICAgICAgICAgIGJlZXBPblNjYW46IHRydWUsXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlIC8vaW9zIG9ubHkgXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShyZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAvL3B1dCBhbGdvIGhlcmVcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMubXlJdGVtcylcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsQ2hlY2tJbih2YWx1ZSk7XG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBzY2FubmluZyBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gc2V0TG9jYWxTdG9yYWdlKFwiaXRlbXNcIiwgXCJcIik7XG4gICAgICAgIGxldCBmZXRjaEl0ZW1zID0gKEpTT04ucGFyc2UoZ2V0TG9jYWxTdG9yYWdlKFwiaXRlbXNcIikpIHx8IFtdKTtcbiAgICAgICAgY29uc29sZS5kaXIoZmV0Y2hJdGVtcyk7XG4gICAgICAgIHRoaXMubXlJdGVtcyA9IGZldGNoSXRlbXM7XG4gICAgfVxuXG4gICAgc2hvd01vZGFsQ2hlY2tJbih2YWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogdmFsdWUsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZjUmVmXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKE1vZGFsQ2hlY2tJbkNvbXBvbmVudCwgb3B0aW9ucykudGhlbihpdGVtQ2hlY2tJbiA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbUNoZWNrSW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RvcmVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBpdGVtcyA9IChKU09OLnBhcnNlKGdldExvY2FsU3RvcmFnZShcIml0ZW1zXCIpKSB8fCBbXSk7XG4gICAgICAgIGl0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoXCJpdGVtc1wiLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICAgIH1cbn1cbiJdfQ==