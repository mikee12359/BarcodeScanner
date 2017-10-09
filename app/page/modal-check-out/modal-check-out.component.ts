import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    templateUrl: "page/modal-check-out/modal-check-out.component.html"
})
export class ModalCheckOutComponent {
    context: any = {};
    
    constructor(private _params: ModalDialogParams) { 
        this.context = _params.context;
    }

    checkOut() {
        this._params.closeCallback(true);
    }

    close() {
        this._params.closeCallback(false);
    }
}