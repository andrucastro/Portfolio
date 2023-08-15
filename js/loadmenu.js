class Menu extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML=`
            <div id="menu">
            <div>
            <a href="index.html">Home</a>
            <a href="">Skills</a>
            <a href="projects.html">Projects</a>
            <a href="">LinkedIn</a>
            </div>
        </div>
        `
    }
}

window.customElements.define("menu-nav", Menu);