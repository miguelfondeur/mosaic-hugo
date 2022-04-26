export default class imageConversion extends HTMLElement {
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
        <div class="step" id="step-3">
            <h3>Your Brick Art</h3>
            <button id="convert">Convert to Dots</button>
            <br>
            <button id="convertToLego" disabled>Convert to Legos</button>
            <div class="results"></div>
            <br>
            <div class="step-buttons">
                <a class="button" href="#step-2">Upload Art</a>
                <a class="button right" id="edit-art" href="#step-4">Edit Your Art</a>
            </div>
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

customElements.define('image-conversion', imageConversion);




