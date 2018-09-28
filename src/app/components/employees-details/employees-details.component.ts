import { ApiService } from './../../api.service';
import { EmployeeList } from './../../shared/Employee/employee-list';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './../../shared/Employee/Employee';

@Component({
        selector: 'app-employees-details',
        templateUrl: './employees-details.component.html',
        styleUrls: ['./employees-details.component.css']
})

export class EmployeesDetailsComponent implements OnInit {

        // public variable declarations
        public page = 1;

        // Private variable declarations
        private getEmpList: Array<Object> = []

        // Public constructor
        constructor(private employee: EmployeeList, private service: ApiService) { }
        ngOnInit() {
                console.log("asdasdsa");
                var items = this.employee.getEmpDetails(this.service);
                console.log("list : ", this.service.getEmpList());
        }

        private getData(service): Observable<Employee[]>{
                return this.employee.getEmpDetails(this.service);
        }
}
