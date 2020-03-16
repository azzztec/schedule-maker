let objectConvert = {
    "date": function (key) {
        if(localStorage.getItem(key))
            return localStorage.getItem(key)
        else return '';
    },
    "cars": function(key) {
        if(localStorage.getItem(key)){
            return JSON.parse((localStorage.getItem(key)))
        } else return [{}]
    },
    "drivers": function(key) {
        if(localStorage.getItem(key)) {
            return localStorage.getItem(key).split(',');
        } else return []
    }
}

function saveInStorage(objectType, objectToSave) {
    localStorage.setItem(objectType, objectToSave);
}

function getFromStorage(objectType) {
    return objectConvert[objectType](objectType);
}


export {saveInStorage, getFromStorage}