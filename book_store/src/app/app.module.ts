import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { ManagerComponent } from './manager/manager.component';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { TableModule } from 'primeng/table'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { BookService } from './services/book.service';
import { provideHttpClient } from '@angular/common/http'; 
import { HeaderComponent } from './header/header.component';


import { InputTextModule } from 'primeng/inputtext';

import { InputGroupModule } from 'primeng/inputgroup';





@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    BookDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule, 
    FormsModule,
    ReactiveFormsModule, 
    TableModule,
    InputNumberModule, 
    DropdownModule,
    InputTextModule,
    InputGroupModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }), BookService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
