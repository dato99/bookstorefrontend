import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { BookDialogComponent } from './book-dialog/book-dialog.component';

const routes: Routes = [{ path: '', redirectTo: '/manager', pathMatch: 'full' }, 
  {path: 'manager', component: ManagerComponent},
  {path: 'book', component: BookDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
