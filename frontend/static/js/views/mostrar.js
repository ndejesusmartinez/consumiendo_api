import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Mostrar");
    }


    async getHtml() {

      const API_URL = 'http://127.0.0.1:3000';

      const xhr = new XMLHttpRequest();

      function onRequestHandler(){
        if(this.readyState == 4 && this.status == 200){
          //console.log(this.response)
          const data = JSON.parse(this.response);
          const HTMLResponse = document.querySelector("#app");
          const tpl = data.map((reservas)=> ` <h3>Datos almacenados -- ID: ${reservas.id} </h3> nombre: ${reservas.nombres} <br>
            Apellidos: ${reservas.apellidos} <br>
            Fecha de entrada: ${reservas.f_entrada} <br>
            Fecha de salida: ${reservas.f_salida} <br>
            Correo: ${reservas.correo} <br>
            Identificacion: ${reservas.identificacion} <br>
            Telefono: ${reservas.telefono}
            `);
          HTMLResponse.innerHTML = tpl;
        }
      }
      xhr.addEventListener('load',onRequestHandler);
      xhr.open('GET',  `${API_URL}/historico`);
      xhr.send();


        }

      }
