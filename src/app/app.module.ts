import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';

@NgModule({
   declarations: [
       AppComponent
   ],
   imports: [
       BrowserModule,
       AppRoutingModule,
       VgCoreModule,
       VgControlsModule
   ],
   providers: [],
   bootstrap: [ AppComponent ]
})
export class AppModule {
}
