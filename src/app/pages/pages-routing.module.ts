import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FaqComponent } from "./faq/faq.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "faq",
    component: FaqComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
