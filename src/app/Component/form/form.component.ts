import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressBookModel } from 'src/app/Model/addressbook-model';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/Service/address.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  City=["mumbai","pune"]
  State=["Karnataka","TamilNadu","Maharashtra","Rajasthan"];

  Id:any=this.route.snapshot.paramMap.get("Id")

  address:AddressBookModel =new AddressBookModel("","","","","","")
  constructor(private router:Router,private addService:AddressService,private route:ActivatedRoute,private fb: FormBuilder,) {
    
    
  }

addressGroup=new FormGroup({
  name:new FormControl(''),
  phone :new FormControl(''),
 address:new FormControl(''),
 city:new FormControl(''),
 state:new FormControl(''),
 zip:new FormControl('')
})

  ngOnInit(): void {
    this.addService.getById(this.Id).subscribe((response:any)=>{
    console.log(response);
     this.addressGroup=new FormGroup({
      name : new FormControl(response['name']),
  phone :new FormControl(response['phone']),
 address:new FormControl(response['address']),
 city:new FormControl(response['city']),
 state:new FormControl(response['state']),
 zip:new FormControl(response['zip'])
     })
    });
  }
 
  onCancel(){
    this.router.navigate(["dashboard"]);
  }

  submit(){
    console.log(this.address);
    this.addService.add(this.addressGroup.value).subscribe((data:any)=>{
      console.log(this.addressGroup.value)
      this.router.navigate(["dashboard"]);
    });
  }

  updateData(){
    this.addService.updateById(this.addressGroup.value,this.Id).subscribe((data:any)=>{
      this.router.navigate(["dashboard"]);
    });
  }

}
