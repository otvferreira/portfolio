import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from '../../components/body/body.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { TecComponent } from '../../components/tec/tec.component';
import { SobreComponent } from '../../components/sobre/sobre.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    BodyComponent,
    TecComponent,
    ExperienceComponent,
    SobreComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
