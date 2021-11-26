import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FraudService } from 'app/services/fraud.service';
import { Fraud } from 'models/fraud';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public nbreUsers! : number ;
  public nbreFrauds! : number;
  public nbreLands! : number;

  public frauds : Fraud[] = [] ;

  public theFrauds : Fraud[] = [] ;

  constructor(private fraudService : FraudService) { }
  
  ngOnInit() {
     
    this.fraudService.getFrauds().subscribe(
      (response : Fraud[])=> {
        this.frauds = response;
        this.nbreFrauds = this.frauds.length ;
        console.log(this.nbreFrauds);

      }
    );
  }

  public getFrauds(): void{
    
    this.fraudService.getFrauds().subscribe(
      (response : Fraud[])=> {
        this.theFrauds = response;
      },
      (error : HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
