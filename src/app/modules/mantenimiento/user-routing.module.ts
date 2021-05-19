import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './usuario/register-user/register-user.component';


const routes: Routes = [
  {path: 'user-register', component: RegisterUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';


const routes: Routes = [
  {path: 'ol-iq-iacontrolacceso/ServletAcceso.htm', component: ModulesComponent},
  {path: '', component: ModulesComponent,
    children: [
      {path: 'operaciones', loadChildren: () => import('./operaciones/operaciones.module').then(m => m.OperacionesModule)},
      {path: 'inventario', loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule)},
      {path: 'incidencias', loadChildren: () => import('./incidencias/incidencias.module').then(m => m.IncidenciasModule)},
      {path: 'consulta', loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule)},
      {path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule)},
      {path: 'mantenimiento', loadChildren: () => import('./mantenimiento/mantenimiento.module').then(m => m.MantenimientoModule)},
      {path: 'observaciones', loadChildren: () => import('./observaciones/observaciones.module').then(m => m.ObservacionesModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }*/