import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contactUsData } from '../Models';
import Swal from 'sweetalert2';

const API_BASE_URL = "http://localhost:8000";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  contactUsData: contactUsData = new contactUsData();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit(): void {

    let uri = API_BASE_URL + "/api/contactus";
    this.http.post(uri, this.contactUsData).subscribe(res => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Enquiry submitted',
        showConfirmButton: false,
        timer: 1500
      })
    },
      (error: any) => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: error.error.error.email[0]
        })
      });
  }

}
