import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { CooperatedIdentificationComponent } from './components/onboarding/cooperated-identification/cooperated-identification.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    StepperComponent,
    OnboardingComponent,
    CooperatedIdentificationComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
