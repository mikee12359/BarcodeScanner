"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modal_check_out_component_1 = require("./page/modal-check-out/modal-check-out.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var barcode_scanner_page_component_1 = require("./page/barcode-scanner-page/barcode-scanner-page.component");
var modal_check_in_component_1 = require("./page/modal-check-in/modal-check-in.component");
var routes = [
    { path: "", redirectTo: "/barcodeScanner", pathMatch: "full" },
    { path: "barcodeScanner", component: barcode_scanner_page_component_1.BarcodeScannerPageComponent }
];
exports.NavigatableComponents = [
    barcode_scanner_page_component_1.BarcodeScannerPageComponent,
    modal_check_in_component_1.ModalCheckInComponent,
    modal_check_out_component_1.ModalCheckOutComponent
];
exports.EntryComponents = [
    modal_check_in_component_1.ModalCheckInComponent,
    modal_check_out_component_1.ModalCheckOutComponent
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhGQUEwRjtBQUMxRixzQ0FBeUM7QUFDekMsc0RBQXVFO0FBRXZFLDZHQUF5RztBQUN6RywyRkFBdUY7QUFFdkYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzlELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSw0REFBMkIsRUFBRTtDQUNyRSxDQUFDO0FBQ1csUUFBQSxxQkFBcUIsR0FBRztJQUNqQyw0REFBMkI7SUFDM0IsZ0RBQXFCO0lBQ3JCLGtEQUFzQjtDQUN6QixDQUFDO0FBRVcsUUFBQSxlQUFlLEdBQUc7SUFDM0IsZ0RBQXFCO0lBQ3JCLGtEQUFzQjtDQUN6QixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbENoZWNrT3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL21vZGFsLWNoZWNrLW91dC9tb2RhbC1jaGVjay1vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyUGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2UvYmFyY29kZS1zY2FubmVyLXBhZ2UvYmFyY29kZS1zY2FubmVyLXBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbENoZWNrSW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlL21vZGFsLWNoZWNrLWluL21vZGFsLWNoZWNrLWluLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2JhcmNvZGVTY2FubmVyXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiYmFyY29kZVNjYW5uZXJcIiwgY29tcG9uZW50OiBCYXJjb2RlU2Nhbm5lclBhZ2VDb21wb25lbnQgfVxuXTtcbmV4cG9ydCBjb25zdCBOYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG4gICAgQmFyY29kZVNjYW5uZXJQYWdlQ29tcG9uZW50LFxuICAgIE1vZGFsQ2hlY2tJbkNvbXBvbmVudCxcbiAgICBNb2RhbENoZWNrT3V0Q29tcG9uZW50XG5dO1xuXG5leHBvcnQgY29uc3QgRW50cnlDb21wb25lbnRzID0gW1xuICAgIE1vZGFsQ2hlY2tJbkNvbXBvbmVudCxcbiAgICBNb2RhbENoZWNrT3V0Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==