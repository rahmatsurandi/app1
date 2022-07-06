import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechnoComponent } from './techno/techno.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  // top hedline & home
  { path: '', component: TopheadlineComponent },
  { path: 'techno', component: TechnoComponent },
  { path: 'buzz', component: BusinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
