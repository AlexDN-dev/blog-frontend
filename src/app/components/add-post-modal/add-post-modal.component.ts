import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-post-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-post-modal.component.html',
})
export class AddPostModalComponent {
  // Variable pour stocker le contenu du textarea
  postContent: string = '';
}
