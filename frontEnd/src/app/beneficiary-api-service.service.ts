import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {Beneficiary} from './beneficiary'

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryApiServiceService {
  
  private URL = "http://localhost:3000/api/beneficiaries/"; 
  constructor(private http: HttpClient) { }

  register(ben: Beneficiary){
    return this.http.post<Beneficiary>(this.URL + "register", ben);
  }

  getAll(){
    return this.http.get<Beneficiary[]>(this.URL + "getAll");
  }

  getById(id: string){
    return this.http.get<Beneficiary>(this.URL + "getById" + id);
  }

  update(ben: Beneficiary){
    return this.http.put<Beneficiary>(this.URL + "update", ben);
  }
  removeById(id: string){
    return this.http.delete<Beneficiary>(this.URL + "removeById" + id);
  }


}

