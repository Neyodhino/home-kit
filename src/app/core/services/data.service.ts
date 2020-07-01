import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://home-kit.lifebank.ng';
@Injectable({
  providedIn: 'root'
})

  export class DataService {
  constructor(private http: HttpClient) {
  }

  public registerLabPartner(formData) {
    console.log(formData);
    return this.http.post(`${BASE_URL}/v1/login/add/user`, formData);
  }

  public getSuppliers() {
    return this.http.get(`${BASE_URL}/v1/find`);
  }

  public requestKit(formData) {
    console.log(formData);
    return this.http.post(`${BASE_URL}/v1/request/`, formData);
  }

  public labRequestKit(formData) {
    console.log(formData);
    return this.http.post(`${BASE_URL}/v1/request/lab/partner`, formData);
  }

  public getDashboardInformation(id) {
    console.log(id);
    return this.http.post(`${BASE_URL}/v1/dashboard/`, id);
  }
  public contactUs(formData) {
    console.log(formData);
    return this.http.post(`${BASE_URL}/v1/contactus/`, formData);
  }
  public requestWaitingList(formData) {
    console.log(formData);
    return this.http.post(`${BASE_URL}/v1/request/join/waiting`, formData);
  }
}


