import { Employee } from './../../shared/Employee/employee';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
        selector: 'app-employees-details',
        templateUrl: './employees-details.component.html',
        styleUrls: ['./employees-details.component.css']
})

export class EmployeesDetailsComponent implements OnInit {

        // public variable declarations
        public page: Number = 1;

        // Private variable declarations
        private getEmpList: Employee[] = [];


        // Public constructor
        constructor(private service: ApiService, private _Activatedroute: ActivatedRoute,
                private _router: Router) { }
        ngOnInit() {
                this.service.getEmpList()
                .subscribe(data => {
                        this.getEmpList = data;
                });
        }

        // Delete the record from the api
        deleteUser(emp: Employee): void {
                this.service.deleteEmpList(emp.id)
                        .subscribe(data => {
                                this.getEmpList = this.getEmpList.filter(u => u !== emp);
                        });
        }

        editUser(user: Employee): void {
                this._router.navigate(['edit'], { queryParams: {id: user.id}});
        }

}
