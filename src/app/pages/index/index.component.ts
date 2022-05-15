import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  // currentSection = "home";

  constructor() {}

  ngOnInit(): void {}

  // /**
  //  * Window scroll method
  //  */
  // windowScroll() {
  //   const navbar = document.getElementById("navbar");
  //   if (
  //     document.body.scrollTop >= 50 ||
  //     document.documentElement.scrollTop > 50
  //   ) {
  //     navbar.classList.add("nav-sticky");
  //   } else {
  //     navbar.classList.remove("nav-sticky");
  //   }
  // }

  // /**
  //  * Section changed method
  //  * @param sectionId specify the current sectionID
  //  */
  // onSectionChange(sectionId: string) {
  //   this.currentSection = sectionId;
  //   console.log(this.currentSection);
  // }

  // /**
  //  * Toggle navbar
  //  */
  // toggleMenu() {
  //   document.getElementById("navbarCollapse").classList.toggle("show");
  // }
}
