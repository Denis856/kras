$(document).ready(function(){
   $('.wrapper').addClass('active');
});

var title1 = document.getElementById('title1');
var title2 = document.getElementById('title2');
var page3_content = document.getElementById('page3_content');
var page3_content2 = document.getElementById('page3_content2');

function show() {
   page3_content.classList.add('back');
   page3_content2.classList.add('back2');
   title1.classList.add('color');
   title2.classList.add('color2');
}

function show2() {
   page3_content.classList.remove('back');
   page3_content2.classList.remove('back2');
   title1.classList.remove('color');
   title2.classList.remove('color2');
}