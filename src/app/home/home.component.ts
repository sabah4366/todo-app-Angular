import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isTaskAdded:boolean=false

  recieveMessage(event:boolean){
    this.isTaskAdded=event
    
  
  }

}
