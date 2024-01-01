import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'prefix'
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'feature',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
