import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { OperationsComponent } from './operations/operations.component';

export const childRoutes: Routes = [
    
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'operations', component: OperationsComponent },
            
            
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
