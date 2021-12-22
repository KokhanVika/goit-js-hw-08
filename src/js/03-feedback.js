import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}
const formData = {};

getLocalData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
        if (refs.input.value !== '' || refs.textarea.value !== "") {
        console.log(`Email:${refs.input.value}`,`Message:${refs.textarea.value}`)
        }  

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);  
};

function onFormInput(evt) { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));   
};

function getLocalData() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const localData = JSON.parse(savedMessage)
    
    if (localData) {
        const { message, email } = localData;
        if ( message && email) {
            refs.textarea.value = message;
            refs.input.value = email;
        }
        else if (message) {
            refs.textarea.value = message;
        }
        else if (email) {
            refs.input.value = email;
        } 
   } 
}
