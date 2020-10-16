import { Component } from '@angular/core';

import {RestoService} from './resto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';

  constructor(private resto:RestoService) { }
  collection:any=[]
  b:boolean=false
  ngOnInit()
  {
  this.resto.getList().subscribe(result=>this.collection=result)
  this.collection = Array.of(this.collection);
  }
  disp()
  {
    this.b=true
  }
}
