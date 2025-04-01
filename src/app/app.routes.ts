import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MediaLibraryComponent } from './components/media-library/media-library.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VectoresComponent } from './components/vectores/vectores.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'vectores', component: VectoresComponent },

    { path: '', component: MediaLibraryComponent },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }