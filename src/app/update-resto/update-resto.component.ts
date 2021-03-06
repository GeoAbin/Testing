import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean=false

  editResto = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    add: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private resto: RestoService) {
    console.warn("UpdateResto Component Loaded")
   }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe(result => {
      this.editResto = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        add: new FormControl(result['add']),
        email: new FormControl(result['email'])
      })
    })

}

collection()
{
  console.warn(this.editResto.value)
  this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe(result=>result)
  this.alert=true
}

closeAlert()
  {
    this.alert=false
  }

}
