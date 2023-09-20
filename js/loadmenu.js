class Menu extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML=`
            <div id="menu">
            <div>
            <a href="index.html">Home</a>
            <a href="projects.html">Projects</a>
            <a href="https://www.linkedin.com/in/andres-felipe-castro-2a628b165/">LinkedIn</a>
            </div>
        </div>
        `
    }
}

window.customElements.define("menu-nav", Menu);