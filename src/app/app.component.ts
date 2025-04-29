import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { UserViewComponent } from "./component/dashboard/user-page/user-view/user-view.component";
import { UserCreateComponent } from "./component/dashboard/user-page/user-create/user-create.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EDP-Frontend';
}
