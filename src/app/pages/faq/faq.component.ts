import { Component, OnInit } from "@angular/core";
import { FaqService } from "../services/faq.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  constructor(private faqService: FaqService) {}
  faqs: [{ id: number; question: string; answer: string }];

  ngOnInit(): void {
    this.faqService.getQuestion().subscribe((res) => {
      console.log(res.data.data);
      this.faqs = res.data.data;
    });
  }
}
