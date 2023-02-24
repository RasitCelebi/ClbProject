let button = document.getElementById('button');
let colorPicker = document.getElementById('colorPicker');
let body = document.getElementById('body')
let text = document.getElementById('text')

button.addEventListener("click", function() {

    colorPicker.focus();
    colorPicker.value = "#11FF00"; // this line default value set.
    colorPicker.click();

  });

  colorPicker.addEventListener('input' , () => {

    let color = colorPicker.value;
    document.body.style.backgroundColor= color;
    
    let colorHexData = color.replace("#", "");
    let colorHexDataUpperCase = colorHexData.toUpperCase();
    text.textContent = "Selected Background Color : " + colorHexDataUpperCase;

  });


