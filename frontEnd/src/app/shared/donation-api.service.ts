import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from './donation/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationApiService {
  private URL = "http://localhost:3000/api/donations/";
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Donation[]>(this.URL + "me");
  }

  create(donation: Donation) {
    return this.http.post<Donation>(this.URL, donation);
  }

  getById(id: string) {
    return this.http.get<Donation>(this.URL + id);
  }

  deleteById(id: string) {
    return this.http.delete<{success: boolean}>(this.URL + id);
  }
}
