import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserViewComponent } from './component/dashboard/user-page/user-view/user-view.component';
import { UserPageComponent } from './component/dashboard/user-page/user-page.component';
import { UserCreateComponent } from './component/dashboard/user-page/user-create/user-create.component';
import { UpdateUserComponent } from './component/dashboard/user-page/update-user/update-user.component';
import { AuditsComponent } from './component/audits/audits.component';
import { ReportsComponent } from './component/reports/reports.component';

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
                    {
                        path: "update/:id",
                        component: UpdateUserComponent
                    }
                ]
            }
        ]
    },
    {
        path:"audit",
        component:AuditsComponent
    },
    {
        path:"report",
        component:ReportsComponent
    }
];
