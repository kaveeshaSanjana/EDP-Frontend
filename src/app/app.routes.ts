import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserViewComponent } from './component/dashboard/user-page/user-view/user-view.component';
import { UserPageComponent } from './component/dashboard/user-page/user-page.component';
import { UserCreateComponent } from './component/dashboard/user-page/user-create/user-create.component';

export const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path: "user",
                component: UserPageComponent,
                children: [
                    {
                        path: "",
                        component: UserViewComponent
                    },
                    {
                        path: "create",
                        component: UserCreateComponent
                    },
                ]
            }

        ]
    }
];
