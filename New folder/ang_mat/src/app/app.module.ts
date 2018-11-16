import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {demo1} from './Demo1/demo1.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule,MatDatepickerModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatButtonModule, MatRippleModule, MatSelectModule, MatIconModule, MatRadioButton, MatRadioGroup, MatRadioModule, MAT_LABEL_GLOBAL_OPTIONS, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCard, MatCardModule, MatListModule, MatExpansionPanelTitle, MatAccordion, MAT_ACCORDION, MatExpansionModule, MatExpansionPanel, MatGridListModule, MatStepperModule, MatTabsModule, MatTreeModule, MatButtonToggleModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBar, MatProgressBarModule } from '@angular/material';
import { Demo2Component } from './demo2/demo2.component';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';

import { } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { Demo3Component } from './demo3/demo3.component';
import { MAT_MENU_PANEL } from '@angular/material/menu/typings/menu-panel';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component, FileNode } from './demo8/demo8.component';
import { BehaviorSubject } from 'rxjs';
import { Demo9Component } from './demo9/demo9.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    demo1,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

    
    

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormField,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatRadioButton,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule

  ],
  providers: [{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},{provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}, {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }
