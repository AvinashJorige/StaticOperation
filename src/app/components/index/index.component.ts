import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {

  private getBkList: Array<object> = [];
  constructor(private apiService:ApiService) { }
  ngOnInit() {
    this.getBookCategory();
  }

  public getBookCategory() {
    this.apiService.getBookCategoryList().subscribe((data: Array<object>) => {  
     this.getBkList = data;
    });
  }
}


