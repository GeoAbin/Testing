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

  ngOnInit()
  {
  this.resto.getList().subscribe(result=>this.collection=result)
  this.collection = Array.of(this.collection);
  }

  b:boolean=false
  disp1()
  {
    this.b=true
  }
  disp2()
  {
    this.b=false
  }
}
