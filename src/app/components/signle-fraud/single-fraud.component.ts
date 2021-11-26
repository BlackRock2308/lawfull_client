import { Component, OnInit } from '@angular/core';
import { Fraud } from 'models/fraud';

@Component({
  selector: 'single-fraud',
  templateUrl: './single-fraud.component.html',
  styleUrls: ['./single-fraud.component.css']
})
export class SingleFraudComponent implements OnInit {
  
  public editFraud !: Fraud;

  public updateFraud !: Fraud;

  
  constructor() { }

  ngOnInit() {
  }

  public openFraudDetails() {
    console.log("test");
  }
}
