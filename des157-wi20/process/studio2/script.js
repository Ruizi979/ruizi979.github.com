
"use strict";

var laptop = document.querySelector('#laptop');
var lipcream = document.querySelector('#lipcream');
var notebook = document.querySelector('#notebook');

var laptop_click = document.querySelector('#laptop_click');
var lipcream_click = document.querySelector('#lipcream_click');
var notebook_click = document.querySelector('#notebook_click');

var closelaptop = document.querySelector('#closelaptop');
var closelipcream = document.querySelector('#closelipcream');
var closenotebook = document.querySelector('#closenotebook');



laptop.addEventListener('click', function () {
    laptop_click.style.display='block';
})
closelaptop.addEventListener('click', function (){
    laptop_click.style.display = 'none';
})

lipcream.addEventListener('click', function () {
    lipcream_click.style.display='block';
})
closelipcream.addEventListener('click', function (){
    lipcream_click.style.display = 'none';
})

notebook.addEventListener('click', function () {
    notebook_click.style.display='block';
})
closenotebook.addEventListener('click', function (){
    notebook_click.style.display = 'none';
})