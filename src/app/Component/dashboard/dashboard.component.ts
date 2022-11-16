import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Service/address.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  add:Array<any>=[];
  countNumber=0;
  constructor(private router:Router,private service:AddressService) { }

  ngOnInit(): void {
    this.getAll();
  

  }
  onAddUser(){
    this.router.navigate(["form"]);

  }

  getAll(){
    this.service.getAll().subscribe((data:any)=>{
      console.log(data);
      this.add=data;
      this.countNumber=this.add.length;
    })
  }
  deleteById(Id:number){
    console.log(Id);

    this.service.deleteById(Id).subscribe((data)=>{
      console.log("user has been deleted",Id)
      this.ngOnInit();
      this.router.navigate(["dashboard"]);
    })

  }

  editById(Id:number){
    this.router.navigate(['update',Id]);
  }

}
