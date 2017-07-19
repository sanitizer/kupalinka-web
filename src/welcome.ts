import 'jquery';
import 'materialize-css';

export class Welcome {

    private carousel: HTMLElement;

    attached() {
        $(document).ready(function () {
            $('.carousel').carousel();
        });
    }

}