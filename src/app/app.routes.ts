import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { HelpPage } from './help-page/help-page';

export const routes: Routes = [
    {
        path: '',
        component: MainPage,
        title: 'CalCount - Home page',
    },
    {
        path: 'help',
        component: HelpPage,
        title: 'Calcount - Help page',
    },
];
