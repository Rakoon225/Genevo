let search = new URLSearchParams(window.location.search);
let text = search.get(`text`);
let type = search.get(`type`);
let textarea = document.querySelector(`#form-textarea`);
if(type && text){
	textarea.value = `Я хочу: ` + `Категория - ` + type + `, услуга - ` + text;
}
