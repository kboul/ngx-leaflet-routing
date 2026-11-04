import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LeafletModule } from "@bluehalo/ngx-leaflet";

import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, LeafletModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
