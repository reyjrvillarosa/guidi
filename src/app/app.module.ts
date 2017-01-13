import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';

import { AuthService } from '../providers/auth-service';

@NgModule({
  
	declarations: [
    
		MyApp,
    
		HomePage
,
		LoginPage  
	],
  
	imports: [
    
		IonicModule.forRoot(MyApp)
  
	],
  
	bootstrap: [IonicApp],
  
	entryComponents: [
    
		MyApp,
    
		HomePage
,
		LoginPage  
	],
  
	providers: [AuthService]
	
})

export class AppModule {}
