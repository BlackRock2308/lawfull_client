import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FraudService } from 'app/services/fraud.service';
import { Fraud } from 'models/fraud';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public frauds : Fraud[] = [];

  public editFraud !: Fraud;

  public updateFraud !: Fraud;

  constructor(private fraudService : FraudService) { }

  ngOnInit() {
    this.getFrauds();
  }

  public getFrauds(): void{
    
    this.fraudService.getFrauds().subscribe(
      (response : Fraud[])=> {
        this.frauds = response;
      },
      (error : HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onOpenModal(fraud: Fraud, mode: string): void {

    console.log("test");
    const container = document.getElementById('main-cont');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editFraud = fraud;
      button.setAttribute('data-target', '#detailEmployeeModal');
    } 
    if (mode === 'update') {
      this.updateFraud = fraud;
      button.setAttribute('data-target', '#editEmployeeForm');
    }
    container.appendChild(button);
    button.click();
  }

  public onDeleteFraud(fraudId : Number) : void{
    let conf = confirm("Are you sure ?");

    if(conf){
      console.log(fraudId);

      this.fraudService.deleteFraud(fraudId).subscribe(
        (response : void) => {
          console.log(response);
         
          this.getFrauds();
        },
        (error : HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    
  }

}
