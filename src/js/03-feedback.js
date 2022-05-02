import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector ('.feedback-form textarea'),
    input: document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', formDataInput);
refs.form.addEventListener('input', throttle(formDataInput, 500));


populateTextarea();

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
};

function populateTextarea(){
    const parseJSON =JSON.parse(localStorage.getItem(STORAGE_KEY)); 
    if(parseJSON.message){
        refs.textarea.value = parseJSON.message;
    };
    if(parseJSON.email){
        refs.input.value = parseJSON.email;
    };
};

function formDataInput(e){
    formData[e.target.name] = e.target.value;
    const dataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, dataJSON);
    

    console.log(dataJSON);
}





// -------второй вариант------



// const form = document.querySelector('form');
// const emailEl = document.querySelector('[name="email"]');
// const messageEl = document.querySelector('[name="message"]');


// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onTextareaInput, 500));


// const STORAGE_KEY = 'feedback-form-state';
// const formData = {
//   email: '',
//   message: '',
// };

// function onTextareaInput(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onResetPage(e) {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedData) {
//     emailEl.value = savedData.email;
//     messageEl.value = savedData.message;
//     formData.email = savedData.email;
//     formData.message = savedData.message;
//   }
// }

// onResetPage();

// function onFormSubmit(e) {
//   e.preventDefault();
//   localStorage.removeItem(STORAGE_KEY);
//   e.currentTarget.reset();
//   console.log(formData);
//   formData.email = '';
//   formData.message = '';
// }















