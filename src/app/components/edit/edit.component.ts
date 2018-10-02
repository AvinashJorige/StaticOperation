import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';
import { Employee } from './../../shared/Employee/employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id: string;
  private userList: Employee;

  constructor(private service: ApiService, private _router: Router, private _Activatedroute: ActivatedRoute) {
    this._Activatedroute.queryParams.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
       // Print the parameter to the console.
  });
   }

  ngOnInit() {
    this.service.getIdEmpList(this.id)
        .subscribe(data => {
                this.userList = data;
        });
  }

}
