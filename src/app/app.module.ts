import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LetrasPipe } from './letras.pipe';
import { SemanaPipe } from './semana.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LetrasPipe,
    SemanaPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
