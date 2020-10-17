import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import {RestoService} from './resto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';

  constructor(
    private resto:RestoService,
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver) { }

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


  async loadAddResto()
  {
    this.vcr.clear()
    const {AddRestoComponent} = await import('./add-resto/add-resto.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(AddRestoComponent))
  }
  async loadListResto()
  {
    this.vcr.clear()
    const {ListRestoComponent} = await import('./list-resto/list-resto.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(ListRestoComponent))
  }
  async loadRegisterResto()
  {
    this.vcr.clear()
    const {RegisterComponent} = await import('./register/register.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(RegisterComponent))
  }
  async loadLoginResto()
  {
    this.vcr.clear()
    const {LoginComponent} = await import('./login/login.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(LoginComponent))
  }
  async loadUpdateResto()
  {
    this.vcr.clear()
    const {UpdateRestoComponent} = await import('./update-resto/update-resto.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(UpdateRestoComponent))
  }

}
