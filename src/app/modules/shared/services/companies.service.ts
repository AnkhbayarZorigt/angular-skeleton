import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

type Company = {
  id: string;
  name: string;
  createdAt: string;
};

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Company[]> {
    return this.http.get<Company[]>("http://localhost:3000/companies");
  }
}
