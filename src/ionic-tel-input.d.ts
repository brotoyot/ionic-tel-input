import { ElementRef, EventEmitter, OnInit } from '@angular/core';
// import 'intl-tel-input-mobile';
import 'intel-tel-input-rtl/build/js/intlTelInput-jquery'
import 'intel-tel-input-rtl/build/js/utils';
export declare class IonicTelInput implements OnInit {
    private el;
    ionicTelInputOptions: any;
    hasError: EventEmitter<boolean>;
    ionicTelOutput: EventEmitter<any>;
    countryChange: EventEmitter<any>;
    intlTelInputObject: EventEmitter<any>;
    ionicTelInput: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    onBlur(): void;
    isInputValid(): boolean;
    setCountry(country: any): void;
}
