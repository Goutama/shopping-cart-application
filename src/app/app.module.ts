import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, AuthModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
