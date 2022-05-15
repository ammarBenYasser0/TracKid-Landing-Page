import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FaqService {
  constructor(private http: HttpClient) {}

  getQuestion() {
    return this.http.get<any>(
      `${environment.api}admin/question/index?user_auth_id=1`
    );
  }
}
