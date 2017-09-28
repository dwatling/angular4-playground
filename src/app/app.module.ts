import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdButtonModule, MdCardModule, MdCheckboxModule, MatListModule, MatInputModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MatListModule,
    MatInputModule,
    MdIconModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
