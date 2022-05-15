import { Component, OnInit } from "@angular/core";
import { AboutUsService } from "../services/about-us.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  constructor(private aboutUsService: AboutUsService) {}

  content: string;

  ngOnInit(): void {
    this.aboutUsService.getAboutUs().subscribe((res) => {
      console.log(res.data[0].body);
      this.content = res.data[0].body;
    });
  }
}
