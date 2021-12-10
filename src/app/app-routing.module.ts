import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGardService } from './services/auth-gard.service';

// Se definen las rutas a nivel de APP
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  
  {
    // See: HomePageModule
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGardService]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./sugerencias/foro.module').then( m => m.ForoPageModule)
  },
  {
    path: 'qrreaderA',
    loadChildren: () => import('./qrreaderA/qrreader.module').then( m => m.QrreaderPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
