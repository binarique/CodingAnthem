$(document).ready(function() {
	
	/* ======= Highlight.js Plugin ======= */ 
    /* Ref: https://highlightjs.org/usage/ */     
    $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	 });

});

document.addEventListener("DOMContentLoaded", function(){
setDate();
});

function setDate(){
var dt = new Date();
var year = dt.getFullYear();
document.querySelector("#dat-year").innerHTML = year;
}

