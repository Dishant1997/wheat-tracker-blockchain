import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Wheat tracker on Blockchian';

  constructor(private authService: AuthService){}

  logout(){
    console.log("inside Logout");
    this.authService.logout();
  }
}
