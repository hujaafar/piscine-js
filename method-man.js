function words(str) {
    return str.split(' ');
}

function sentence(arr) {
    return arr.join(' ');
}

function yell(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return `*${str.toLowerCase()}*`;
}


function capitalize(str) {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
