import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  public ngDoBootstrap(appRef: ApplicationRef) {
    const customElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('remote2-app', customElement);
  }
}
