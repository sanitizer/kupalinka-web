/**
 * Created by sanitizer on 7/14/17.
 */
import 'jquery';
import 'materialize-css';

export class Home {

    data: string;

    constructor() {
        this.data = "hello this is home";
    }

    attached() {
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    }

}