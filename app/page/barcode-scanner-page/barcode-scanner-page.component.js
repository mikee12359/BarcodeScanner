"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_check_in_component_1 = require("../modal-check-in/modal-check-in.component");
var modal_check_out_component_1 = require("../modal-check-out/modal-check-out.component");
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
        var _self = this;
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            beepOnScan: true,
            resultDisplayDuration: 500,
            orientation: "portrait",
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then(function (result) {
            var value = JSON.parse(result.text);
            var itemFound = _self.myItems.find(function (item) { return item.id === value.id; });
            if (itemFound) {
                _self.showModal(value, modal_check_out_component_1.ModalCheckOutComponent, _self.checkOut);
            }
            else {
                _self.showModal(value, modal_check_in_component_1.ModalCheckInComponent, _self.checkIn);
            }
            //put algo here
        }, function (errorMessage) {
            console.log("Error when scanning " + errorMessage);
        });
    };
    BarcodeScannerPageComponent.prototype.checkIn = function (value) {
        this.myItems.push(value);
        this.storeValue(value);
    };
    BarcodeScannerPageComponent.prototype.checkOut = function (value) {
        this.myItems.filter(function (item) {
            if (item.id == value.id) {
                return item;
            }
        });
        this.removeValue(value.id);
    };
    BarcodeScannerPageComponent.prototype.ngOnInit = function () {
        // clearLocalStorage("items");
        var fetchItems = (JSON.parse(localstorage_utils_1.getLocalStorage("items")) || []);
        console.dir(fetchItems);
        this.myItems = fetchItems;
    };
    BarcodeScannerPageComponent.prototype.showModal = function (value, modalComponent, fn) {
        var _self = this;
        var options = {
            context: value,
            fullscreen: false,
            viewContainerRef: this._vcRef
        };
        this._modalService.showModal(modalComponent, options).then(function (status) {
            if (status) {
                fn.call(_self, value);
            }
        });
    };
    BarcodeScannerPageComponent.prototype.storeValue = function (value) {
        var items = (JSON.parse(localstorage_utils_1.getLocalStorage("items")) || []);
        items.push(value);
        localstorage_utils_1.setLocalStorage("items", JSON.stringify(items));
    };
    BarcodeScannerPageComponent.prototype.removeValue = function (valueId) {
        var items = (JSON.parse(localstorage_utils_1.getLocalStorage("items")) || []);
        items.filter(function (item) {
            if (item.id == valueId) {
                return item;
            }
        });
        localstorage_utils_1.setLocalStorage("items", JSON.stringify(items));
        console.log(items);
    };
    BarcodeScannerPageComponent.prototype.checkoutValue = function (value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyY29kZS1zY2FubmVyLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFyY29kZS1zY2FubmVyLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQW9FO0FBQ3BFLDJFQUE2RDtBQUM3RCxrRUFBdUU7QUFDdkUsdUZBQW1GO0FBQ25GLDBGQUFzRjtBQUV0RixxRUFBcUc7QUFPckc7SUFHSSxnQkFBZ0I7SUFDaEIscUNBQW9CLGFBQWlDLEVBQVUsTUFBd0I7UUFBbkUsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFGdkYsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUdyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksNENBQWMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSw0Q0FBTSxHQUFiO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsVUFBVSxFQUFFLElBQUk7WUFDaEIscUJBQXFCLEVBQUUsR0FBRztZQUMxQixXQUFXLEVBQUUsVUFBVTtZQUN2QiwyQ0FBMkMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7WUFDakUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFLLENBQUMsU0FB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LENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtREFBYSxHQUFiLFVBQWMsS0FBVTtJQUV4QixDQUFDO0lBekZRLDJCQUEyQjtRQUp2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLCtEQUErRDtTQUMvRSxDQUFDO3lDQUtxQyxpQ0FBa0IsRUFBa0IsdUJBQWdCO09BSjlFLDJCQUEyQixDQTBGdkM7SUFBRCxrQ0FBQztDQUFBLEFBMUZELElBMEZDO0FBMUZZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2pzLWxpYnMvZXNwcmltYSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBNb2RhbENoZWNrSW5Db21wb25lbnQgfSBmcm9tIFwiLi4vbW9kYWwtY2hlY2staW4vbW9kYWwtY2hlY2staW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbENoZWNrT3V0Q29tcG9uZW50IH0gZnJvbSBcIi4uL21vZGFsLWNoZWNrLW91dC9tb2RhbC1jaGVjay1vdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzZXRMb2NhbFN0b3JhZ2UsIGdldExvY2FsU3RvcmFnZSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlLnV0aWxzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2UvYmFyY29kZS1zY2FubmVyLXBhZ2UvYmFyY29kZS1zY2FubmVyLXBhZ2UuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBiYXJjb2RlU2Nhbm5lcjogYW55O1xuICAgIG15SXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgICAvLyBkYXRhOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIgPSBuZXcgQmFyY29kZVNjYW5uZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TY2FuKCkge1xuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREUsIEVBTl8xM1wiLFxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgICAgICAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWUgLy9pb3Mgb25seSBcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgIGxldCBpdGVtRm91bmQgPSBfc2VsZi5teUl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB2YWx1ZS5pZCk7XG4gICAgICAgICAgICBpZiAoaXRlbUZvdW5kKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuc2hvd01vZGFsKHZhbHVlLCBNb2RhbENoZWNrT3V0Q29tcG9uZW50LCBfc2VsZi5jaGVja091dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zZWxmLnNob3dNb2RhbCh2YWx1ZSwgTW9kYWxDaGVja0luQ29tcG9uZW50LCBfc2VsZi5jaGVja0luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcHV0IGFsZ28gaGVyZVxuICAgICAgICAgICAgXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBzY2FubmluZyBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgY2hlY2tJbih2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMubXlJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zdG9yZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjaGVja091dCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMubXlJdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSB2YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSh2YWx1ZS5pZCk7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBjbGVhckxvY2FsU3RvcmFnZShcIml0ZW1zXCIpO1xuICAgICAgICBsZXQgZmV0Y2hJdGVtcyA9IChKU09OLnBhcnNlKGdldExvY2FsU3RvcmFnZShcIml0ZW1zXCIpKSB8fCBbXSk7XG4gICAgICAgIGNvbnNvbGUuZGlyKGZldGNoSXRlbXMpO1xuICAgICAgICB0aGlzLm15SXRlbXMgPSBmZXRjaEl0ZW1zO1xuICAgIH1cblxuICAgIHNob3dNb2RhbCh2YWx1ZTogYW55LCBtb2RhbENvbXBvbmVudDogYW55LCBmbjogRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHZhbHVlLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92Y1JlZlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChtb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoX3NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RvcmVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBpdGVtcyA9IChKU09OLnBhcnNlKGdldExvY2FsU3RvcmFnZShcIml0ZW1zXCIpKSB8fCBbXSk7XG4gICAgICAgIGl0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoXCJpdGVtc1wiLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICAgIH1cblxuICAgIHJlbW92ZVZhbHVlKHZhbHVlSWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgaXRlbXMgPSAoSlNPTi5wYXJzZShnZXRMb2NhbFN0b3JhZ2UoXCJpdGVtc1wiKSkgfHwgW10pO1xuICAgICAgICBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSB2YWx1ZUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHNldExvY2FsU3RvcmFnZShcIml0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcbiAgICB9XG5cbiAgICBjaGVja291dFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgXG4gICAgfVxufVxuIl19