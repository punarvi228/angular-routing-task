import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  public finalDataList:any =[];

  constructor(private _DataListService:DataListService) { }

  

  ngOnInit(): void {
    this._DataListService.getDataDetails().subscribe(data => this.finalDataList = data);
  }
  

}
