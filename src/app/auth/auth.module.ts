import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbLayoutModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ]
})
export class AuthModule { }
