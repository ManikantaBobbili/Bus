import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusFormComponent } from './bus-form/bus-form.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';


const routes: Routes = [
  { path: 'addNewBus', component: BusFormComponent },
  { path: 'viewBuses', component: BusListComponent },
  { path: 'editBus/:id', component: BusFormComponent },
  { path: 'confirmDelete/:id', component: DeleteConfirmComponent }
  // { path: '', component: BusListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
