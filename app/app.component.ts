import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app/app.component.html`
})


export class AppComponent  { // Create a class AppComponent with app.component.html as templateUrl
    role_arr:string[]=["Admin","Member","Super Admin","Supervisor"];
    filterArr:any=[]; // This array stores the names of the user of the chosen role
    openEmpDetails(a:string){ // method that takes the chosen role as parameter
        for(let user of this.user_arr){ // iterate through the filterArr and check if any of the role matches the selected role
            if(user.role===a){
                this.filterArr.push(user.name); // if a match is found, push the employee name to the filterArr for display in the html
            }

        }
    }
    reset(){ // a method reset empties the filterArr so that new employee list can be added with a new input role
        this.filterArr=[];
        this.filterArr.length=0;
    }
    
    
    public user_arr:any[] = [ // an array of objects containing the user details
        {
        name: "Crawford Maxwell",
        age: 30,
        role: "Admin",
        },
        {
        name: "Rob Hoyt",
        age: 26,
        role: "Member",
        },
        {
        name: "Gordon Cody",
        age: 28,
        role: "Member",
        },
        {
        name: "Bala Savitri",
        age: 24,
        role: "Member",
        },
        {
        name: "Kumari Madhavi",
        age: 29,
        role: "Admin",
        },
        {
        name: "Radha Saraswati",
        age: 29,
        role: "Super Admin",
        },
        {
        name: "Sundara Baladeva",
        age: 30,
        role: "Member",
        },
        {
        name: "Varuna Pitambara",
        age: 24,
        role: "Supervisor",
        }
        
    ]
   
}
 
