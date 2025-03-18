import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({//Meta-data
  selector: 'app-root', //cách gọi/nhúng component vào trong trang/component khác
  imports: [RouterOutlet, CommonModule, FormsModule], //khai báo những package/component sẽ được sử dụng trong component này
  templateUrl: './app.component.html', //đường dẫn đến file giao diện
  styleUrl: './app.component.css' //đường dẫn đến file css
})

export class AppComponent { //khai báo biến/hàm sẽ sử dụng trong component
  title = 'thaivm2';
  listStudents = [
    {
      maSv: 'PH12345',
      ten: 'Thaivm2',
      nganh: 'Web',
      thi: 3 
    },
    {
      maSv: 'PH12346',
      ten: 'Thaivm3',
      nganh: 'Marketing',
      thi: 5
    },
    {
      maSv: 'PH12347',
      ten: 'Thaivm4',
      nganh: 'Design',
      thi: 10
    }
  ]

  count: number = 0;
  countClick(): number {
    return this.count++;
  }

  name: string = 'thaivm2';
}
