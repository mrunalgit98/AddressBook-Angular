import { state } from "@angular/animations";

export class AddressBookModel {
    name:string;
    Address:string;
    city:string;
    state:string;
    zip:string;
    phone:string;

    constructor(name:string,Address:string,
        city:string,
        State:string,
        zip:string,
        phone:string){
        this.name=name;
        this.Address=Address;
        this.city=city;
        this.state=State;
        this.zip=zip;
        this.phone=phone;
    }


}
