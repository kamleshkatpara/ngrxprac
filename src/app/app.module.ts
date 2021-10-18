import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, State, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { storeLogger } from 'ngrx-store-logger';
import { AppReducer, AppState } from './store/app.state';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
