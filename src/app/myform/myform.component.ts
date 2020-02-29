import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
 export class MyformComponent implements OnInit {
  clickMessage = '';
  employee = [];
  currentSave = {};
  myform: FormGroup;


// myform=new FormGroup({
//   fname:new FormControl(''),
//   lname:new FormControl(''),
//   email:new FormControl(''),0
//   // address:new FormGroup({
//     street:new FormControl(''),
//        city:new FormControl(''),
//     state:new FormControl(''),
//     // zipcode:new FormControl('')
//   // })
// });
//   myform=this.mybuilder.group({
// fname:[''],
// lname:[''],
// email:[''],
// street:[''],
// city:[''],
// state:[''],

//   })

  
  constructor(private mybuilder:FormBuilder) {
    this.myform = this.mybuilder.group({
    fname:['',Validators.required],
    lname:['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
    email:['',Validators.required,Validators.email],
    street:[''],
    city:[''],
    state:['']
    });

  }

 
  ngOnInit(): void {
    
  }
myfun(myform:any){
  
  console.log(myform);
}

onClickMe() {

console.log("Employee",this.employee);
console.log("locaStorage" ,localStorage.getItem('user'));
// console.log("obj localstorage",JSON.parse(localStorage.getItem('user')).length);
if(localStorage.getItem('user')==null){
  console.log("we are in");
  this.employee.push(this.myform.value);
  localStorage.setItem('user', JSON.stringify(this.employee));
  console.log("Employee",this.employee);
  console.log("locaStorage" ,localStorage.getItem('user').length);
  console.log("obj localstorage",JSON.parse(localStorage.getItem('user')).length);
}else{
  console.log("we are out1");
  const fr = localStorage.getItem("user");
  console.log("fr" + fr);
      const sds = JSON.parse(fr);
    console.log("sds length " + sds.length)
    for(var i=0;i<sds.length;i++){
      this.employee[i] = sds[i];
      console.log(this.employee)
    }

  this.employee.push(this.myform.value);
  localStorage.setItem('user', JSON.stringify(this.employee));
  console.log("Employee",this.employee);
  console.log("locaStorage" ,localStorage.getItem('user').length);
  console.log("obj localstorage",JSON.parse(localStorage.getItem('user')).length);

}
this.myform.reset();

}

ongetEmp() {
  console.log(localStorage.getItem('user'));
  const  onj = localStorage.getItem('user');
  const  d = JSON.parse(onj);
  console.log(d)
  console.log(d[0].fname);
}

}

