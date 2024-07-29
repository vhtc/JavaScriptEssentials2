const obj = {
    mae: "Mary",
    avo: {
        avo1: "zelina",
        avo2: {
            primas: "Taty"
        }
    }
}

let deepClone = function (obj) {
    let newObj = { ...obj };
    for (property in newObj) {
        if (typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}

let newObj = {...obj}

console.log(deepClone(obj))