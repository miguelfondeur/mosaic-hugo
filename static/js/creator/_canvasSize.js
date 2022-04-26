export default class canvasSize extends HTMLElement {
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
        <div class="step" id="step-1">
            <h3>Choose Canvas Size</h3>
            <label class="selectBox" for="boardSize">
                <select name="boardSize" id="boardSize" >
                    <option value="standard">48 X 48 Standard</option>
                    <option value="wide">48 X 96 Wide</option>
                    <option value="ultra">48 X 144 Ultra Wide</option>
                </select>
            </label>
            <div class="step-buttons">
                <a class="button right" href="#step-2">Upload Art</a>
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

customElements.define('canvas-size', canvasSize);