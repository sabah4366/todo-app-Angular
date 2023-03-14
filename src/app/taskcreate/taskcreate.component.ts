import { Component, EventEmitter, Output } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent {

  @Output() triggerparent:EventEmitter<boolean>=new EventEmitter()
  constructor(private service:TaskserviceService){}

  taskcreate(inp1:any){
    this.triggerparent.emit(false)
    let data={
      "task_name":inp1.value
    }
    this.service.taskCreate(data).then((res:any)=>res.json()).then(data=>{
      this.triggerparent.emit(true)
    }).catch(err=>console.log(err))
    
  }



}
