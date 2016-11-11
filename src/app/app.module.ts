import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//router
import { routing, appRoutingProviders } from './app.routes';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';

//service
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [appRoutingProviders,MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
