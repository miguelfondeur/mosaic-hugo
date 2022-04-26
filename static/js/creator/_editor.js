export default class editor extends HTMLElement {
    constructor() {
        super();
    
        //data
        this.data = {

        }

        //attach root
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['count', 'color', 'name', 'avatar'];       
    }

    //getters
    
    //setters
    
    render() {
        this.shadow.innerHTML = `
        <div class="step" id="step-4">
            <h3>Edit Your Art</h3>
            <h3>Edit colors as group</h3>
            <div class="uniqueColors"></div>
            <h3>Edit individual color</h3>
            <div class="step-buttons">
                <a class="button" href="#step-3">Convert Art</a>
                <a class="button right" href="#step-5">Save Art</a>
            </div>
        </div>
        <div class="step" id="step-5">
            <h3>Save Your Art</h3>
        </div>`;
    }

    //methods
    methods() {
        return {

        };
    }

    //Life Cycle Hooks
    attributeChangedCallback(prop, oldVal, newVal) {
        
    }

    connectedCallback() {
        //render
        this.render();
    }

    disconnectedCallback() {
        
    }
}

customElements.define('canvas-editor', editor);




