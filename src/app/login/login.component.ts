import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private auth:AuthService,
    private router:Router
  ) {}

  onLogin(data:any): void {
    //gửi dữ liệu lên json-server để đăng nhập
    this.auth.login(data).subscribe(res => {
      const token = res?.accessToken; //lấy token mà json-server trả về
      localStorage.setItem('token', token); //lưu token vào trong localStorage
      alert('Đăng nhập thành công');
      this.router.navigate(['']); //đẩy ng dùng về trang danh sách
    })
  }
}
