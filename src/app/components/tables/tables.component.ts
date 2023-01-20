import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {

  @Input() tableHeader!:Array<string>;
  @Input() tableBody!:Array<object>;
  constructor(){

  }
    printTableHeader(tableHeader:Array<string>) {
      this.tableHeader = tableHeader
    }
    printBody(tableBody:Array<object>) {
      this.tableBody = tableBody;
    }
      
   
  
}
