import { Options } from 'tns-core-modules/js-libs/esprima';
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalCheckInComponent } from "../modal-check-in/modal-check-in.component";
import { ModalCheckOutComponent } from "../modal-check-out/modal-check-out.component";
import { Constants } from "../../constants";
import { setLocalStorage, getLocalStorage, clearLocalStorage } from "../../utils/localstorage.utils";


@Component({
    selector: "ns-details",
    templateUrl: "page/barcode-scanner-page/barcode-scanner-page.component.html",
})
export class BarcodeScannerPageComponent implements OnInit {
    barcodeScanner: any;
    myItems: Array<any> = [];
    // data: string;
    constructor(private _modalService: ModalDialogService, private _vcRef: ViewContainerRef) {
        this.barcodeScanner = new BarcodeScanner();
    }

    public onScan() {
        
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            beepOnScan: true,
            resultDisplayDuration: 500,
            orientation: "portrait",
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            let value = JSON.parse(result.text);
            //put algo here
            // console.dir(this.myItems)
            for(var array = 0;array <= this.myItems.length; array++){
                if(value == this.myItems[array]){
                    this.showModalCheckOut(value);
                } else { this.showModalCheckIn(value); }
            }
            
        }, (errorMessage) => {
            console.log("Error when scanning " + errorMessage);
        }
            );
            
            
    }
    
    ngOnInit() {
        // setLocalStorage("items", "");
        let fetchItems = (JSON.parse(getLocalStorage("items")) || []);
        console.dir(fetchItems);
        this.myItems = fetchItems;
    }

    showModalCheckIn(value: any) {
        let options = {
            context: value,
            fullscreen: false,
            viewContainerRef: this._vcRef
        }

        this._modalService.showModal(ModalCheckInComponent, options).then(itemCheckIn => {
            if (itemCheckIn) {
                this.myItems.push(value);
                this.storeValue(value);
            }
        });
    }
    showModalCheckOut(value: any) {
        let options = {
            context: value,
            fullscreen: false,
            viewContainerRef: this._vcRef
        }
        this._modalService.showModal(ModalCheckOutComponent, options).then(itemCheckOut => {
            if (itemCheckOut) {
                this.myItems.pop(value);
            }
        })
    }

    storeValue(value: any) {
        let items = (JSON.parse(getLocalStorage("items")) || []);
        items.push(value);
        setLocalStorage("items", JSON.stringify(items));
    }
    checkoutValue(value: any) {
        let 
    }
}
