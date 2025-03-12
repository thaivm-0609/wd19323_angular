import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({//Meta-data
  selector: 'app-root', //cách gọi/nhúng component vào trong trang/component khác
  imports: [RouterOutlet], //khai báo những component sẽ được sử dụng trong component này
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
    },
    {
      maSv: 'PH12346',
      ten: 'Thaivm3',
      nganh: 'Marketing',
    },
    {
      maSv: 'PH12347',
      ten: 'Thaivm4',
      nganh: 'Design',
    }
  ]
}
