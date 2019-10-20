import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
 
    this.getValues();
    console.log('123');
  }

  getValues() {
  
   
    this.http.get('http://localhost:44338/api/values').subscribe(response => {
    console.log('response',response); 
    this.values = response;
    
    }, error => {
      console.log(error);
    });
  }

}
