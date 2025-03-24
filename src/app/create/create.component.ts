import { HttpClient } from '@angular/common/http'; //call API
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //làm việc vs form
import { Router } from '@angular/router'; //điều hướng sau khi xử lý xong

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private client:HttpClient,
    private router:Router
  ) {}

  apiUrl:string = "http://localhost:3000/students";

  onCreate(data:any):void { //data là dữ liệu ng dùng nhập vào form
    //call API để đẩy dữ liệu lên json-server
    this.client.post(this.apiUrl,data).subscribe(res => {
      if (res) {
        alert('Thêm mới thành công');
        this.router.navigate(['']); //điều hướng về trang danh sách
      }
    })
  }
}
