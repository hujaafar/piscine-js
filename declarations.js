const escapeStr ="`\\/\"'" ;
const arr = [4, '2'];
const obj = {
    str:"Habib llolololo",
    num : 2,
    bool : true,
    undef: undefined  
}
const nested = {
    arr: [4, undefined, '2'],
    obj:Object.freeze({
        str: "Habib llolololo",
        num: 2,
        bool: true
    })    
}
