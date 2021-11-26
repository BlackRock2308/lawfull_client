import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Fraud } from 'models/fraud';

@Injectable({
  providedIn: 'root'
})
export class FraudService {

  
  constructor(private http : HttpClient) { }

  public getFrauds(): Observable<Fraud[]>{
    return this.http.get<Fraud[]>(`http://localhost:8080/api/v1/frauds`);
  }


  public getOneFraud(fraudId : Number) : Observable<Fraud>{
    return this.http.get<Fraud>(`http://localhost:8080/api/v1/frauds/${fraudId}`);
  }

  public deleteFraud(fraudId : Number) : Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/api/v1/frauds/${fraudId}`);
  }
}
