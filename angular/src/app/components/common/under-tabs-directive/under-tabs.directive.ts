import {Directive, ElementRef} from "@angular/core"

@Directive({
  selector: "[under-tabs]"
})
export class UnderTabsDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.marginTop = "70px";
  }

}
