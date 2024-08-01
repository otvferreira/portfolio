import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "experiencias",
    component: ExperienceComponent
  },
  {
    path: "projetos",
    component: MainComponent
  }
];
