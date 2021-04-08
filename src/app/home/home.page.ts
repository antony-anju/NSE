import { Component, OnInit } from '@angular/core';
import { AuthService} from '../shared/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public companyName;
  constructor(public authService:AuthService) {}

  ngOnInit() {}

  onClick() {
    this.authService.onSearch(this.companyName).toPromise();
  }
}
