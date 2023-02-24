// DOM = 'D'ocument 'O'bject 'M'odel
console.log("Merhaba");


console.log(document.getElementById('title'));
console.log(document.getElementById("title").className);

const title = document.getElementById("title");

title.style.backgroundColor = "red";
title.style.color = "white";
title.style.padding="2rem";
title.style.display="show";

title.textContent="New Header Text"

console.log(title.textContent);
title.innerText = "abc";
title.innerHTML = ' <img src="https://assets-global.website-files.com/608a88369ffab4f5de1ed321/63f35253b68fbb93f5aedf7b_JavaScript-code.jpeg" height="50" width="50" alt="a software photo"> ';
// when i use the innerHTML with " ""   ", code don't run. So i used "  '' "

// . class # id 

console.log(document.querySelector('#list'))
// when i use the innerHTML with " ""   ", code don't run. So i used "  '' "





