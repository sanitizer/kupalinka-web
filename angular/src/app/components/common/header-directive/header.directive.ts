import {Directive, ElementRef} from "@angular/core"

@Directive({
  selector: "[header]"
})
export class HeaderDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.fontFamily = "sans-serif";
    element.nativeElement.style.textDecoration = "none";
    element.nativeElement.style.whiteSpace = "pre-line";
  }

}
