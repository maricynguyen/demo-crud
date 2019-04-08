import { Component, OnInit } from '@angular/core';
import { Name } from '../name';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameList: string[] = ['id', 'name'];
  data: Name[] = [];
  constructor() { }

  ngOnInit() {
  }

}
