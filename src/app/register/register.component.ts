import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserData } from '../Models';
import Swal from 'sweetalert2';

const API_BASE_URL = "http://localhost:8000";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserData = new UserData();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  submit(): void {
    let uri = API_BASE_URL + "/api/register";

    this.http.post(uri, this.user).subscribe((res: any) => {
      console.log(res);

      this.router.navigateByUrl("login");
    }, (error: any) => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Error while registering"
      })
    });
  }

}
