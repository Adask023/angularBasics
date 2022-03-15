import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Zad2formsComponent } from './ex/zad2forms/zad2forms.component';
import { Zad3directivesComponent } from './ex/zad3directives/zad3directives.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, Zad2formsComponent, Zad3directivesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
