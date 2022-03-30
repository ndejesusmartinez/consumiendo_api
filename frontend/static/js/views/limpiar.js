import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Limpiar");
    }

    async getHtml() {
        return `
            <h1>Limpiar Multiplicaciones Almacenadas En La DB</h1>
            <a href="/" data-link>Limpiar DB</a>
        `;
    }
}
