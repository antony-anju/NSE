import { Component, OnInit } from '@angular/core';
import { AuthService} from '../shared/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public companyName;
  public response: any;
  constructor(public authService:AuthService) {}

  ngOnInit() {}

  onClick() {
    this.authService.onSearch(this.companyName).subscribe(async (res) => {
      console.log(res);  
      this.response =res;
    })
  }
}
