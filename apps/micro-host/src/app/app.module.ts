import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            // @ts-ignore
            import('micro1/foo').then((m) => m.FooModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
