import { ModalCheckOutComponent } from './page/modal-check-out/modal-check-out.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { BarcodeScannerPageComponent } from "./page/barcode-scanner-page/barcode-scanner-page.component";
import { ModalCheckInComponent } from "./page/modal-check-in/modal-check-in.component";

const routes: Routes = [
    { path: "", redirectTo: "/barcodeScanner", pathMatch: "full" },
    { path: "barcodeScanner", component: BarcodeScannerPageComponent }
];
export const NavigatableComponents = [
    BarcodeScannerPageComponent,
    ModalCheckInComponent,
    ModalCheckOutComponent
];

export const EntryComponents = [
    ModalCheckInComponent,
    ModalCheckOutComponent
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }