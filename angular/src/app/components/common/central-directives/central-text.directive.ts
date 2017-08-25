import {Directive, ElementRef} from "@angular/core"

@Directive({
  selector: "[central-text]"
})
export class CentralTextDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.padding = "1% 5%";
    element.nativeElement.style.font = "1.2em sans-serif";
    element.nativeElement.style.whiteSpace = "pre-line";
    element.nativeElement.style.textDecoration = "none";
    element.nativeElement.style.textAlign = "justify";
    element.nativeElement.style.lineHeight = "2em";
  }

}
