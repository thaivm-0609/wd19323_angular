import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',//đường dẫn ng dùng nhập trên URL
        component: ListComponent 
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        //khai báo params /:tenParam
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { //not-found: phải để ở dưới cùng
        path: '**',
        component: NotFoundComponent
    }
];
