const $ = (selector) => document.getElementById(selector);

//Boton +Nueva Operacion
$("button-operacion").addEventListener('click', () => addNewOperation());

const addNewOperation = () =>{
    $('section-column1').classList.add('hidden');
    $('section-column2').classList.add('hidden');
    $("category-list").classList.add('hidden');
    $('form-operaciones').classList.remove('hidden');
}

//Boton Balance
$("button-balance").addEventListener('click', () => returnMain())

const returnMain = () =>{
    $('section-column1').classList.remove('hidden');
    $('section-column2').classList.remove('hidden');
    $('form-operaciones').classList.add('hidden');
    $("section-reportes").classList.add('hidden');
}

//Boton reportes
$("button-reportes").addEventListener('click', () => viewReports())

const viewReports = () =>{
    $("section-reportes").classList.remove('hidden')
    $('section-column1').classList.add('hidden');
    $('section-column2').classList.add('hidden');
    $('form-operaciones').classList.add('hidden');
    $("category-list").classList.add('hidden');
}

//Boton categorias
$("button-categoria").addEventListener('click', () => categoryList())

const categoryList = () =>{
    $('section-column1').classList.add('hidden');
    $('section-column2').classList.add('hidden');
    $('form-operaciones').classList.add('hidden');
    $("category-list").classList.remove('hidden');
    $("section-reportes").classList.add('hidden');
}