import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';
import { FilterPipe } from './filter/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';



const routes: Routes = [
{ path: '', component: IndexComponent },
{ path: 'create', component: CreateComponent },
{ path: 'edit/:id', component: EditComponent },
{ path: 'index', component: IndexComponent },
{ path: 'list', component: EmployeesDetailsComponent },
];

@NgModule({
declarations: [AppComponent, CreateComponent, IndexComponent, EditComponent, EmployeesDetailsComponent, FilterPipe],
imports: [BrowserModule, RouterModule.forRoot(routes), SlimLoadingBarModule, HttpClientModule, FormsModule, NgxPaginationModule],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
