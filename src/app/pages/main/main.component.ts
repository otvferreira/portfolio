import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
