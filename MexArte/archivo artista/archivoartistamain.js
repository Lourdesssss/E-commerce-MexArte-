


const form = document.getElementById("form")
const titulodeobra = document.getElementById("titulodeobra")
const materiales = document.getElementById("materiales")
const descripción = document.getElementById("descripción")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (titulodeobra.value.length > 25) {
        warnings += `El título de la obra, debe contener menos de 25 caracteres. <br>`
        entrar = true
    }

    if (materiales.value.length > 100) {
        warnings += `La descripción de materiales de usados en la obra, debe contener menos de 100 caracteres. <br>`
        entrar = true
    }

    if (descripción.value.length > 250) {
        warnings += `La descripción de la obra, debe contener menos de 250 caracteres. <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})

// Select all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file;

button.onclick = () => {
    input.click();
}


input.addEventListener("change", function () {
    file = this.files[0];
    dropArea.classList.add("active");
    showFile();
})


dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File"
})


dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File"
})

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
})



function showFile() {
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an image file");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}

/*Vista previa del archivo*/
document.getElementById("uploadInput").addEventListener("change", handleFiles, false);
var buttonS=document.getElementById("btn");
buttonS.addEventListener('click', uploadFile);

function handleFiles(f) {
    //var previewDiv=document.getElementById('preview').innerHTML='';
    const files=document.getElementById("uploadInput").files;

    /**limpiar vista previa */
    for (let i = 0; i < files.length; i++) {

      var previewDiv = document.getElementById("preview").innerHTML='';
      const file = files[i];
  
      if (!file.type.startsWith('image/')){ continue }
  
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
  
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
    document.getElementById("preview").style.width = "500px";
    document.getElementById("preview").style.height = "300px";
    document.getElementById("preview").style.padding = "10px";
    
}


function upLoadFile(){
    console.log("holi");
    const selectedFile=document.getElementById('uploadInput').files[0];
    //console.log(selectedFile);
    const imgs = document.querySelectorAll(".obj");

    for(let i=0; i<imgs.length; i++){
        new FileUpload(imgs[i], imgs[i].file);
        //console.log(img[i], img[i].file);
    }
}

function FileUpload(img, file){
    console.log("holo");
    var reader=new FileReader();
    reader.onload=function(event){
        //el texto del archivo se mostrará por consola aquí
        //console.log(event.target.result);
        const obj={
            filename:file.filename,
            mimeType:file.type,
            bytes: [...new Int8Array(event.target.result)]
        };
        console.log(obj.bytes);

        //google.script.run.withSuccessHandler((e) => console.log(e)).uploadFiles(obj);
        
        
    };

    reader.readAsArrayBuffer(file);
}