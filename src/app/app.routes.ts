import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { HelpPage } from './help-page/help-page';
import { RegistrationForm } from './registration-form/registration-form';

export const routes: Routes = [
    {
        path: '',
        component: MainPage,
        title: 'CalCount - Home',
    },
    {
        path: 'help',
        component: HelpPage,
        title: 'Calcount - Help',
    },
    {
        path: 'register',
        component: RegistrationForm,
        title: 'Calcount - Register',
    }
];
