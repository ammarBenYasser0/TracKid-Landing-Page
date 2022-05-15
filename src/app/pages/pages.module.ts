import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";

import { IndexComponent } from "./index/index.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FaqComponent } from "./faq/faq.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [IndexComponent, AboutUsComponent, FaqComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbAccordionModule,
  ],
})
export class PagesModule {}
