import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("multiplicar");
    }

    async getHtml() {
        return `
            <h1>Multiplicar Numero Grandes De Manera Exacta</h1>
            <form class="" action="calcular.js" method="post">
              <input type="number" name="dato1" value="">
              <input type="number" name="dato2" value="">
              <a href="/calcular.js"><input type="submit" name="" value="Calcular"></a>
            </form>

        `;
    }

}
