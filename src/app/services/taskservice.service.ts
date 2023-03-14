import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskserviceService {
  constructor() {}

  getToken(data: any) {
    let option = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch('http://127.0.0.1:8000/token/', option);
  }

  taskCreate(data: any) {
    let token = localStorage.getItem('token');
    if (token) {
      let options = {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
          "Authorization": token,
        },
      };
      return fetch('http://127.0.0.1:8000/tasks/', options);
    }
    else{

      return new Promise((res,rej)=>rej("failed to fetch data from source"))
    }
  }
  showtask(){
    let token=localStorage.getItem('token')
    if(token){
      let options={
        method:"get",
        headers:{
          'content-type':'application/json',
          "Authorization":token
        }
      }
      return fetch('http://127.0.0.1:8000/tasks/', options)
    }
    else{
      return new Promise((res,rej)=>('failed to fetch data from sources'))
    }
  }

  taskdelete(id:any){
    let token=localStorage.getItem('token')
    if(token){
     let options={
      method:"DELETE",
      headers:{
        'content-type':'application/json',
        'Authorization':token
      }
     }
     return fetch(`http://127.0.0.1:8000/tasks/${id}`, options)
    }
    else{
      return new Promise((res,rej)=>('failed to fetch data from sources'))

    }

  }

}
