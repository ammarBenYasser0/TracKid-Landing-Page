import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AboutUsRes } from "../models/aboutUsRes";

@Injectable({
  providedIn: "root",
})
export class AboutUsService {
  constructor(private http: HttpClient) {}

  getAboutUs() {
    return this.http.get<AboutUsRes>(`${environment.api}admin/about_us/index`);
  }
}
