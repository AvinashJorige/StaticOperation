import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../src/app/shared/Employee/employee'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost:60968';

  constructor(private httpClient: HttpClient) {}

  getBookCategoryList(){
    return this.httpClient.get(`${this.API_URL}/api/getBookCategoryList`);
  }



  // Employee service function
  // ---------------------------------------------------------------------------------
  API_EMP_URL = 'http://dummy.restapiexample.com/api/v1';

  // Get all employee data
  getEmpList(){
    return this.httpClient.get(this.API_EMP_URL+ '/employees');
  }

  // 	Get a single employee data
  getIdEmpList(id: string) {
    return this.httpClient.get(this.API_EMP_URL+ '/employee/' + id );
  }

  // Create new record in database
  createEmpList(employee: Employee ) {
    return this.httpClient.post(this.API_EMP_URL + '/create', employee);
  }

  //Update an employee record
  updateEmpList(employee: Employee) {
    return this.httpClient.put(this.API_EMP_URL + '/update', employee);
  }

  //Delete an employee record
  deleteEmpList(id: string) {
    return this.httpClient.delete(this.API_EMP_URL + '/update/' + id );
  }
}
