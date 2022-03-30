const API_URL = 'http://127.0.0.1:3000';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
  if(this.readyState == 4 && this.status == 200){
    //console.log(this.response)
    const data = JSON.parse(this.response);
    const HTMLResponse = document.querySelector("#app");
    const tpl = data.map((calculos)=> ` <h3>Datos almacenados -- ID: ${calculos.id} </h3><li> Primer Dato: ${calculos.primer_dato} ||  Segundo Dato: ${calculos.segundo_dato} || Resultado: ${calculos.resultado}</li>`);
    HTMLResponse.innerHTML = tpl;
  }
}
xhr.addEventListener('load',onRequestHandler);
xhr.open('GET',  `${API_URL}/historico`);
xhr.send();
