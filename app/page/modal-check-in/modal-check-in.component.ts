import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    templateUrl: "page/modal-check-in/modal-check-in.component.html"
})
export class ModalCheckInComponent {
    context: any = {};
    
    constructor(private _params: ModalDialogParams) { 
        this.context = _params.context;
    }

    checkIn() {
        this._params.closeCallback(true);
    }

    close() {
        this._params.closeCallback(false);
    }
}