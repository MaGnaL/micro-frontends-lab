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
            import('./second/second.module').then((m) => m.SecondModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
