import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //Now we are succecssfully exposing this property using this @Input decorator
  @Input() element!:  {type:string,name:string,content:string};

  constructor() { }

  ngOnInit(): void {
  }

}
