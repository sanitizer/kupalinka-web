import {Directive, ElementRef} from "@angular/core"

@Directive({
  selector: "[central-header]"
})
export class CentralHeaderDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.fontFamily = "sans-serif";
    element.nativeElement.style.textDecoration = "none";
    element.nativeElement.style.textAlign = "center";
    element.nativeElement.style.paddingBottom = "20px";
  }

}
