import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //constructor: khởi tạo biến/package cần sử dụng cho component
  constructor(private client:HttpClient) {}
  listStudents:any = [];
  apiUrl:string = 'http://localhost:3000/students';

  ngOnInit():void { //khai báo những hàm sẽ được thực thi khi load component
    this.getListStudents();
  }

  getListStudents(): void{
    //cú pháp call api: this.client.method(apiUrl).subscribe(res =>{})
    this.client.get(this.apiUrl).subscribe(res => {
      //gán lại giá trị cho biến listStudents
      this.listStudents = res;
    })
  }

  onDelete(id:number):void {
    if (confirm('Bạn có chắc không?')) {
      //call api để xóa bản ghi
      this.client.delete(`${this.apiUrl}/${id}`).subscribe(res => {
        alert('Xóa thành công');
        this.getListStudents();
      })
    }
  }
}
