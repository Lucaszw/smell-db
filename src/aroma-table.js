import tableHTML from "./aroma-table.html";
import {coupling} from "./sample-sensors";
import { el, mount } from "redom";
import randomInt from "random-int";
import { random } from "lodash";

class AromaTable {
    constructor (container) {
        this.container = container;
    }

    draw() {
        this.container.innerHTML = "";
        this.table = el("div", {innerHTML: tableHTML});
        mount(this.container, this.table);

        const tableBody = this.table.querySelector("tbody");

        // For now create N random samples
        let numSamples = randomInt(0,50);
        for (let i=0;i<numSamples;i++) {
            let row = `
                <th scope="row">${i+1}</th>
                <td>P${randomInt(1000,5000)}</td>
                <td>E${randomInt(10000,5000)}</td>
                <td>${randomInt(0,24)}:${randomInt(0,60)}</td>
                <td>${randomInt(30,1000)} seconds</td>
                <td>${randomInt(-90,90)}.${randomInt(0,100000)},${randomInt(-180,180)}.${randomInt(0,100000)}</td>
                <td>...</td>
                <td>${randomInt(0,50)} Days</td>
                <td>${coupling[randomInt(0,7)].name}</td>
                <td><i class="fa fa-play" aria-hidden="true"></i></td>
            `;
            mount(tableBody, el("tr", {innerHTML: row}));
        }
    }
}

export default AromaTable;