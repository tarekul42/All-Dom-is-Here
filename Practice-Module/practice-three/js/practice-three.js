//  bold 
document.getElementById('bold').addEventListener('click', function() {
    document.getElementById('textarea').classList.toggle("font-bold");
})
// italic
document.getElementById('italic').addEventListener('click', function() {
    document.getElementById('textarea').classList.toggle("italic");
})
// underline
document.getElementById('underline').addEventListener('click', function() {
    document.getElementById('textarea').classList.toggle("underline");
})
// text align left
document.getElementById('left').addEventListener('click', function() {
    document.getElementById('textarea').style.textAlign="left";
})
// text align center
document.getElementById('center').addEventListener('click', function() {
    document.getElementById('textarea').style.textAlign="center";
})
// text align right
document.getElementById('right').addEventListener('click', function() {
    document.getElementById('textarea').style.textAlign="right";
})
// text align justify
document.getElementById('justify').addEventListener('click', function() {
    document.getElementById('textarea').style.textAlign="justify";
})
// font size 
document.getElementById('fontSize').addEventListener('change', function(e) {
   let inputValue = e.target.value;      
   document.getElementById('textarea').style.fontSize = inputValue+'px';
})
document.getElementById('color').addEventListener('change', function(e) {
 let inputValue = e.target.value;      
 document.getElementById('textarea').style.color = inputValue;
})
