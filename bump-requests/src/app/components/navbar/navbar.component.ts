import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  isLoggedIn(): boolean{
    if (localStorage.getItem('token')) {
      return true;
    }else{
      return false;
    }
  }

  ngOnInit() {
  }


  
  logout(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.logout(token)
      .then((user) => {
        console.log(user.json());
        if (user.json().status === 'success') {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
