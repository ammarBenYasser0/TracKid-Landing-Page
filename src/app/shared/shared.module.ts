import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesComponent } from "./features/features.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services-component/services.component";
import { FooterComponent } from "./footer/footer.component";

import { FeatherModule } from "angular-feather";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

import {
  Mail,
  Link,
  PhoneCall,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Calendar,
  User,
  Server,
  Rss,
  Layout,
  LifeBuoy,
  ArrowRightCircle,
  PieChart,
  Triangle,
  Smartphone,
} from "angular-feather/icons";
import { NavbarComponent } from "./navbar/navbar.component";
import { PagesRoutingModule } from "../pages/pages-routing.module";

const icons = {
  Mail,
  Link,
  PhoneCall,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Calendar,
  User,
  Server,
  Rss,
  Layout,
  LifeBuoy,
  ArrowRightCircle,
  PieChart,
  Triangle,
  Smartphone,
};

@NgModule({
  declarations: [
    FeaturesComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    ScrollToModule.forRoot(),
    PagesRoutingModule,
  ],
  exports: [
    FeaturesComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    FeatherModule,
    NavbarComponent,
  ],
})
export class SharedModule {}
