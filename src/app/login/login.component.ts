import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginData } from '../Models';
import { error } from 'protractor';
// import {AuthenticationService} from "../service/auth.service";

const API_BASE_URL = "http://localhost:8000";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData = new LoginData();

  constructor(
    private client: HttpClient,
     private router: Router
    ) { }

  ngOnInit() {
  }


  onSubmit(): void {
    let uri = API_BASE_URL + "/api/login";
    this.client.post(uri, this.loginData).subscribe((res:any) => {
      this.router.navigateByUrl("home");
    },(error: any) =>
    {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Invalid Credentials"
      })
    })

    //this.client.post()
  }

}

