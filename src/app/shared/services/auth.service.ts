import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(private http: HttpClient) {}

  onSearch(companyName: string) {
    return this.http.post(`${environment.serverURL}/info/onSearch`, {companyName});
   }
}
