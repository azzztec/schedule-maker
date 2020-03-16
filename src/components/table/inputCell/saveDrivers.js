let drivers = [];

function addInStorage(drivers) {
    localStorage.setItem("cellDrivers", drivers)
}

function getFromStorage() {
    let inputs = document.querySelectorAll('.table__input-surname');

    if(localStorage.getItem("cellDrivers")) {
        let savedDrivers = localStorage.getItem("cellDrivers").split(',');

        inputs.forEach((item, index) => {
            item.value = savedDrivers[index];
        })
    }

}

function saveDriversInStorage() {
    let inputs = document.querySelectorAll('.table__input-surname');
    
    if(inputs.length >= 1) {
        inputs.forEach((item, index) => {
            item.dataset.positionInStorage = index
            drivers[index] = item.dataset.surname
        })
        addInStorage(drivers);
    }
}

export {saveDriversInStorage, getFromStorage}