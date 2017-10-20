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
        var _self = this;

        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            beepOnScan: true,
            resultDisplayDuration: 500,
            orientation: "portrait",
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            let value = JSON.parse(result.text);
            let itemFound = _self.myItems.find(item => item.id === value.id);
            if (itemFound) {
                _self.showModal(value, ModalCheckOutComponent, _self.checkOut);
            } else {
                _self.showModal(value, ModalCheckInComponent, _self.checkIn);
            }
            //put algo here
            
        }, (errorMessage) => {
            console.log("Error when scanning " + errorMessage);
        }
            );
    }

    checkIn(value: any) {
        this.myItems.push(value);
        this.storeValue(value);
    }

    checkOut(value: any) {
        this.myItems.filter(item => {
            if (item.id == value.id) {
                return item;
            }
        });
        this.removeValue(value.id);
    }
    
    ngOnInit() {
        // clearLocalStorage("items");
        let fetchItems = (JSON.parse(getLocalStorage("items")) || []);
        console.dir(fetchItems);
        this.myItems = fetchItems;
    }

    showModal(value: any, modalComponent: any, fn: Function) {
        var _self = this;

        let options = {
            context: value,
            fullscreen: false,
            viewContainerRef: this._vcRef
        }

        this._modalService.showModal(modalComponent, options).then(status => {
            if (status) {
                fn.call(_self, value);
            }
        });
    }

    storeValue(value: any) {
        let items = (JSON.parse(getLocalStorage("items")) || []);
        items.push(value);
        setLocalStorage("items", JSON.stringify(items));
    }

    removeValue(valueId: string) {
        let items = (JSON.parse(getLocalStorage("items")) || []);
        items.filter(item => {
            if (item.id == valueId) {
                return item;
            }
        })
        setLocalStorage("items", JSON.stringify(items));
        console.log(items);
    }

    checkoutValue(value: any) {
        
    }
}
