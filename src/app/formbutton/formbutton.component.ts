import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formbutton',
  templateUrl: './formbutton.component.html',
  styleUrls: ['./formbutton.component.css']
})
export class FormbuttonComponent implements OnInit {
  
  name ="";
  lname = "";
  email = "";
  street = "";
  city = "";
  state = "";

  constructor() { 

  }

  ngOnInit(): void {
    let sdat= "";
  }
  sdat = JSON.parse(localStorage.getItem("user"));
  
  // onClickMe(){
  //   const s = localStorage.getItem("user");
  //   const ss = JSON.parse(s);
  //   console.log(ss);
  //   let val = "<table style='width:100%'><tr>";
  //   val = val +  "<th>Firstname</th><th>Age</th><th>Contact</th><th>Address</th><th>Email</th><th>Bio</th></tr>";
  //   console.log(ss.length);
  //   console.log(localStorage.getItem('user') == null);
  //   if(ss == null){
  //       console.log("he there!");
        
  //   }else{
  //     for(var i=0;i<ss.length;i++){
  //       var sd = "<tr><td>"+ss[i].fname+"</td><td>"+ss[i].lname+"</td><td>"+ss[i].email+"</td><td>"+ss[i].street+"</td><td>"+ss[i].city+"</td><td>"+ss[i].state+"</td></tr>"
  //       val = val + sd;
      
  //     }
  //   }
  //   val = val + " </tr></table>";
  //   document.getElementById("ab").innerHTML = val;
    
  // }
  onEdit(num,a){
     console.log(num);
     console.log(a);     
    
  }

  onDel(num,pp){
      console.log(num);
      console.log(pp.fname);
      let a = localStorage.getItem('user');
      var as = JSON.parse(a);
      if(as != null){
        const list  =  as.filter(a => a.fname != pp.fname)
        console.log(list);
         localStorage.setItem('user',JSON.stringify(list));
        
         this.sdat = JSON.parse(localStorage.getItem('user'));
      }


     

      
      
      
  }
  

}
