import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from '../app/test/test.component'
import {AboutComponent} from '../app/about/about.component'
import { ContactComponent } from './contact/contact.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
    { path: 'test-component', component: TestComponent },
    { path: 'about-component', component: AboutComponent },
    { path: 'contact-component', component: ContactComponent },
    { path: 'book-list-component', component: BooklistComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
