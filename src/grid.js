import { el, mount } from "redom";
import modalDiv from './aroma-modal.html';
import fourierDiv from "./fourier.html";

import $ from "jquery";
import sensors from "./sample-sensors";
import launchPlot from "./fourier";
import AromaTable from "./aroma-table.js";

class Grid {
    constructor(items) {
        this.items = items;
        this.panels = [];
        this.container = el(".grid");
        mount(document.body, this.container);
        window.addEventListener('resize', this.getRowWidth.bind(this));
    }

    draw() {
        this.container.innerHTML = "";
        this.panels = [];
        for (let i=0;i<this.items.length;i++) {
            let panel = this.panels[i] = el(".grid-item", {innerHTML: `
                <b class="item-name">Name</b>
                <div class="item-photo"></div>
            `});
            panel.type = this.items[i].type;
            panel.onclick = this.showAromaData.bind(this, this.items[i]);
            let panelName = panel.querySelector(".item-name");
            let panelPhoto = panel.querySelector(".item-photo");
            panelName.innerHTML = this.items[i].name;
            panelPhoto.style.backgroundImage = `url(${this.items[i].image})`;

            mount(this.container, panel);
        }
        this.getRowWidth();
    }

    showAromaData(item) {
        let modal = el("div", {innerHTML: modalDiv});
        modal.querySelector(".modal-title").innerHTML = item.name;
        mount(document.body, modal);
        $(modal.children[0]).modal('show');
        $(modal.children[0]).on("hide.bs.modal", () => {
            modal.remove();
        });

        let sensorList = modal.querySelector(".sensor-types");
        let sensorFunctions = modal.querySelector(".sensor-functions");
        sensorList.innerHTML = "";

        for (let sensor of sensors) {
            let sensorOption = el("span.badge.badge-danger", sensor.category);
            mount(sensorList, sensorOption);
            sensorOption.onclick = () => {
                sensorFunctions.innerHTML = "";
                for (let biosensor of sensor.sensors) {
                    console.log({biosensor});
                    let biosensorOption = el("span.badge.badge-warning", biosensor.name);
                    mount(sensorFunctions, biosensorOption);
                    biosensorOption.onclick = this.loadPlot.bind(this, modal, sensor, biosensor);
                }
            }
        }
    }

    loadPlot(modal, sensor, biosensor) {
        // fourierDiv
        const plot = modal.querySelector(".fourier-plot");
        plot.innerHTML = "";
        mount(plot, el("div", {innerHTML: fourierDiv}));
        launchPlot(modal.querySelector("#fourier .plot"));

        let aromaTable = new AromaTable(modal.querySelector(".table-container"));
        aromaTable.draw();

    }

    filterBySensorType(type) {
        for (let i=0; i < this.panels.length; i++) {
            if (this.panels[i].type == type) {
                this.panels[i].style.display = "block";
                continue;
            }
            this.panels[i].style.display = "none";
        }
    }

    removeSensorFilter() {
        for (let i=0; i < this.panels.length; i++) {
            this.panels[i].style.display = "block";
        }
    }

    getRowWidth() {
        this.container.style.width = "";
        let positions = [];
        for (let i=0;i<this.items.length;i++) {
            const {right: x} = this.panels[i].getBoundingClientRect();
            positions.push(x);
        }
        let maxX = _.max(positions);
        this.container.style.width = `${maxX+10}px`;
    }
}

export default Grid;
