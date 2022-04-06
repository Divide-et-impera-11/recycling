import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CentralComponent } from './central/central.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar-component';
import { E404Component } from './error/e404/e404.component';
import { E403Component } from './error/e403/e403.component';
import { TrippathComponent } from './trippath/trippath.component';
//central
import { MunkaListaComponent } from './central/central-components/munkalista/munkalista.component';
//Service
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from 'src/app/auth-guard.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabaseService } from './db.service';
//Materials
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { RoleGuardService } from './service/role-guard.service';
//spinner
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
//Validator
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  //login
  {path: 'login', component: LoginComponent},
  //registration
  {path: 'register', component: RegisterComponent},
  //central
  {
    path: 'central',
    canActivate: [AuthGuardService],
    component: CentralComponent,
    //central.childs
    children: [
      {
        path: 'tripspath/:id',
        canActivate: [AuthGuardService,RoleGuardService],
        data: {
          expectedRole: 1,
        },
        component: MunkaListaComponent,
      },
      //E403
      {
        path: '403',
        component: E403Component
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  //E404
  {
    path: '**',
    component: E404Component,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CentralComponent,
    SidenavComponent,
    ToolbarComponent,
    //central
    MunkaListaComponent,
    TrippathComponent,
    //Errors
    E404Component,
    E403Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    //Material
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    CommonModule,
    //spinner
    NgxSpinnerModule,
    //Validator
    ReactiveFormsModule
  ],
  exports:[
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthenticationService, AuthGuardService, DatabaseService,RoleGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
