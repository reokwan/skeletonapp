import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrreaderComponent } from './qrreader.component';

const routes: Routes = [
  {
    path: '',
    component: QrreaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrreaderPageRoutingModule {}
