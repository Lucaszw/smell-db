import * as _ from 'lodash';
import { el, mount } from "redom";
import navigationDiv from './navigation.html';

class Navigation {
    constructor() {
    }
    draw() {
        this.container = el(".navigation", {innerHTML: navigationDiv});
        mount(document.body, this.container);

        let sensorOptions = this.container.querySelectorAll(".dropdown-item");
        let dropdown = this.container.querySelector("#sensorDropdown");
        let _this = this;

        for (let option of sensorOptions) {
            
            option.onclick = function () {
                dropdown.innerHTML = "&#10005; "+ this.innerHTML;
                dropdown.value = this.getAttribute("value");
                console.log(this, this.getAttribute("value"));
                _this.onSelectType(this.getAttribute("value"));
            }
        }

        dropdown.onclick = function (e) {
            if (dropdown.value) {
                e.stopImmediatePropagation();
                dropdown.innerHTML = "Sensor Mode";
                dropdown.value = "";
                console.log(_this);
                _this.onSelectType();
            }
        }
    }
}

export default new Navigation();