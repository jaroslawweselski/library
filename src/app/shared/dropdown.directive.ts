import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
    private isActive = false;
    constructor(private elRef: ElementRef) {}

    @HostListener('click') onClick() {
        this.isActive = !this.isActive;
        this.elRef.nativeElement.nextSibling.classList.toggle('show');
    }
}
