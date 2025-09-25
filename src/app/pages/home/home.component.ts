import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { AddPostModalComponent } from '../../components/add-post-modal/add-post-modal.component';
import { PostModalComponent } from '../../components/post-modal/post-modal.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavBarComponent, AddPostModalComponent, PostModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
