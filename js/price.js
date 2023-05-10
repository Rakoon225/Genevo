let search = new URLSearchParams(window.location.search);
let type = search.get(`type`);
createPrice(type);