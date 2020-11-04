import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './scss/main.scss';
import Navigation from './navigation';
import Grid from './grid';
import sampleData from './sample-data';

function main() {
    Navigation.draw();
    const grid = new Grid(sampleData);
    grid.draw();
    Navigation.onSelectType = (type) => {
        if (type == null) {
            grid.removeSensorFilter();
        } else {
            grid.filterBySensorType(type);
        }
    }

    console.log({grid});
}

main();