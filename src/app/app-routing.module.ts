import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycallletterComponent } from './mycallletter/mycallletter.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  { path:'mycallletter', component:MycallletterComponent},
  { path:'editprofile', component:EditprofileComponent},
  { path: 'settings' , component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
