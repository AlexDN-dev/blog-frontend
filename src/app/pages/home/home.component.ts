import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { AddPostModalComponent } from '../../components/add-post-modal/add-post-modal.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavBarComponent, AddPostModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
