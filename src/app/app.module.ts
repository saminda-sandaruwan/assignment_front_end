import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OwlModule } from 'ngx-owl-carousel';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
//  import { HttpModule } from '@angular/http';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgImageSliderModule } from 'ng-image-slider';
import { MSliderComponent } from './m-slider/m-slider.component';
import { MDBBootstrapModule  } from "angular-bootstrap-md";
import { SSliderComponent } from './s-slider/s-slider.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CalanderComponent } from './calander/calander.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MSliderComponent,
    SSliderComponent,
    ContactUsComponent,
    CalanderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    // ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    OwlModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgImageSliderModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
