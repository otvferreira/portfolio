import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from '../../components/body/body.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    BodyComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
