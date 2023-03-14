import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnChanges,OnInit {
  alltasks:any
  @Input() inp:boolean=false

  ngOnChanges(changes: SimpleChanges): void {
    
if (this.inp){
  this.service.showtask().then((res:any)=>res.json()).then(data=>this.alltasks=data).catch(err=>console.log(err))

}    
  }
  ngOnInit(): void {
    
    
    this.service.showtask().then((res:any)=>res.json()).then(data=>this.alltasks=data).catch(err=>console.log(err))
    console.log(this.inp);
    
    
  }

  deltask(id:any){
    this.service.taskdelete(id).then((res:any)=>res.json()).then(data=>console.log()).catch(err=>console.log(err))
  }
  
  constructor(private service: TaskserviceService) {}

  
}
