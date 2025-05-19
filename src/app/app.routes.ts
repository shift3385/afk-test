import { Routes } from '@angular/router';
import { CounterComponent } from '../pages/counter/counter.component';
import { HeroPageComponent } from '../pages/hero/hero-page.component';
import { PrincipalComponent } from '../pages/principal/principal.component';
import { AfkComponent } from '../pages/afk/afk.component';
import { AfkSuperPageComponent } from '../pages/afk-super/afk-super-page.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'afk',
    component: AfkComponent
  },
  {
    path: 'afk-super',
    component: AfkSuperPageComponent
  },
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: '**',
    redirectTo: ("home")
  }
];
