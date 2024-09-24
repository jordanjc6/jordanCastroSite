import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        title: 'JC Site',
        component: HomeComponent,
    },
    {
        path: 'projects',
        title: 'JC Projects',
        component: ProjectsComponent,
    },
    {
        path: 'contact',
        title: 'JC Contact',
        component: ContactComponent,
    },
];
