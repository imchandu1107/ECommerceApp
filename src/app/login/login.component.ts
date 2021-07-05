import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private us: UserService ,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin( userCredentials: any ) {
    this.us.userLogin( userCredentials ).subscribe(
      res => {
        if ( res.message === "Login successful" ) {
          //save token to local storage
          localStorage.setItem( "token", res.token )
          localStorage.setItem( "username", res.username )
          localStorage.setItem( "userObj", JSON.stringify( res.userObj ) )

          //update login status
          this.us.userLoginStatus=true

          //navigate
          this.router.navigateByUrl( "/products" )
        }
        else {
          alert(res.message)
        }
      },
      err => {
        console.log( err )
        alert( "Something went wrong in Login" )
      }
    )
  }

}
