import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  currentSection = "home";

  ngOnInit(): void {}

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }

  // /**
  //  * Section changed method
  //  * @param sectionId specify the current sectionID
  //  */
  // onSectionChange(sectionId: string) {
  //   this.currentSection = sectionId;
  //   console.log(this.currentSection);
  // }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById("navbarCollapse").classList.toggle("show");
  }
}
