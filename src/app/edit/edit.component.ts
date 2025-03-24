import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //lấy id từ URL


@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(
    private client:HttpClient,
    private actRoute:ActivatedRoute,
    private router:Router
  ) {}

  apiUrl:string = 'http://localhost:3000/students';
  id:number = 0;
  oldStudent:any;  

  ngOnInit():void {
    //gán giá trị id trên url: this.actRoute.snapshot.params['tenParam']
    this.id = this.actRoute.snapshot.params['id'];
    //gọi hàm getDetail để lấy dữ liệu cũ
    this.getDetail();
  }

  getDetail():void { //lấy dữ liệu cũ để hiển thị ra form
    this.client.get(`${this.apiUrl}/${this.id}`).subscribe(res => {
      if (res) { //nếu có dữ liệu => gán giá trị cho biến oldStudent
        this.oldStudent = res;
      }
    })
  }

  onEdit(data:any):void { //cập nhật dữ liệu mới
    this.client.put(`${this.apiUrl}/${this.id}`,data).subscribe(res => {
      if (res) {
        alert('Cập nhật thành công');
        this.router.navigate(['']);
      }
    })
  }
}
