import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {BookAddComponent} from './books/book-add/book-add.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientListComponent} from './clients/client-list/client-list.component';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientAddComponent} from './clients/client-add/client-add.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {ClientService} from './clients/client.service';
import {BookService} from './books/book.service';
import {DropdownDirective} from './shared/dropdown.directive';
import {FormsModule} from '@angular/forms';

const appRoutes = [
    {
        'path': '',
        'component': HomeComponent
    },
    {
        'path': 'books',
        'component': BooksComponent
    },
    {
        'path': 'clients',
        'component': ClientsComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BooksComponent,
        BookListComponent,
        BookDetailComponent,
        BookAddComponent,
        BookEditComponent,
        ClientsComponent,
        ClientListComponent,
        ClientDetailComponent,
        ClientAddComponent,
        ClientEditComponent,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [
        ClientService,
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
