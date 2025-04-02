import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private auth:AuthService,
    private router:Router
  ) {}

  onRegister(data:any):void {
    this.auth.register(data).subscribe(res => {
      alert('Đăng ký thành công');
      this.router.navigate(['/login']);
    })
  }
}
