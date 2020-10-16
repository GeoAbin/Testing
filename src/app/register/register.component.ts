import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean=false

  register=new FormGroup({
    user:new FormControl(''),
    pass: new FormControl(''),
    email:new FormControl('')
  })


  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  closeAlert()
  {
    this.alert=false
  }
  collection()
  {
    console.warn(this.register.value)
    this.resto.registerUser(this.register.value).subscribe(result=>result)
    this.alert=true
    this.register.reset({})
  }

}
