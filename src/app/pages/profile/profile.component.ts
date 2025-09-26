import { Component } from '@angular/core';
import { PostModalComponent } from '../../components/post-modal/post-modal.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PostModalComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {}
