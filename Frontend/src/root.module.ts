import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {CommonModule, PlatformLocation} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RootRoutingModule} from './root-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RootComponent} from './root.component';
import {Framework} from './shared/framework';


// tslint:disable-next-line:typedef
function appInitializerFactory(injector: Injector, platformLocation: PlatformLocation) {
  // const framework = injector.get(Framework);
  return () => {
    return new Promise<boolean>((res, rej) => {
      const dom = injector.get(Framework).preLoader.__init__();
      setTimeout( () => {
        //dom.remove();
        res(true);
      } , 500);
    });
  };
}

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector, PlatformLocation],
      multi: true
    },
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule {
}
