const $ = (selector) => document.getElementById(selector);

//Boton +Nueva Operacion
$("button-operacion").addEventListener('click', () => addNewOperation());

const addNewOperation = () =>{
    $('section-column1').classList.add('hidden');
    $('section-column2').classList.add('hidden');
    $('form-operaciones').classList.remove('hidden');
}

//Boton Balance
$("button-balance").addEventListener('click', () => returnMain())

const returnMain = () =>{
    $('section-column1').classList.remove('hidden');
    $('section-column2').classList.remove('hidden');
    $('form-operaciones').classList.add('hidden');
}