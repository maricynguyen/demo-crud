import { Component, OnInit } from '@angular/core';
import { Name } from '../name';
// class Name{
//   constructor(
//     public name: string = '',
//   ) {}
// };
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameList: Name[] = [];
  newName: Name;
  
  constructor() {
    this.newName = new Name();
  }

  ngOnInit() {
  }
  onSave(){
    this.nameList.push(this.newName);
  }
}
