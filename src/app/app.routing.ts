import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingComponent } from './Loading/Loading.component';
import { NeonLightComponent } from './NeonLight/NeonLight.component';

const routes: Routes = [
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  { path: 'light', component: NeonLightComponent },
  { path: '**', redirectTo: '/loading', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }
