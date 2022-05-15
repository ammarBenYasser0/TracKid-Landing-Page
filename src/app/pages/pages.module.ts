import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [IndexComponent, AboutUsComponent, FaqComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule
  ]
})
export class PagesModule { }
