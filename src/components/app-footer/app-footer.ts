import { Component, Input } from "@angular/core";

/**
 * Generated class for the AppFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-footer",
  templateUrl: "app-footer.html"
})
export class AppFooterComponent {
  @Input("showLogo")
  showLogo: boolean = true;
  text: string;

  constructor() {
    console.log("Hello AppFooterComponent Component");
    this.text = "Hello World";
  }
}
