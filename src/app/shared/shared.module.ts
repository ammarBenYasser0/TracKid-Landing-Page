import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesComponent } from "./features/features.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent } from "./footer/footer.component";

import { FeatherModule } from "angular-feather";
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
import { ScrollspyDirective } from "./scrollspy.directive";

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
    ScrollspyDirective,
  ],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [
    FeaturesComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    FeatherModule,
    ScrollspyDirective,
  ],
})
export class SharedModule {}
