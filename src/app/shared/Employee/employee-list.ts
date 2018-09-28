import { ApiService } from './../../api.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class EmployeeList  {
    //getEmpList: Array<Object> = []

    constructor(private service:ApiService ){
        this.getEmpDetails(service);
    }


    ///--- Helper Function --- 
    // getEmpDetails    : Return the employee list
    // Params               : service :: Injecting Api service to the function for http service
    // return                 :  Array<object>
    public getEmpDetails(service) {
        service.getEmpList().subscribe((data: Array<object>) => {
            console.log(data);
            return data;
        });
    }// End of getEmpDetails(service)


}// End of Export class
