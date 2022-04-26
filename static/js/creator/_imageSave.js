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
        <div class="step" id="step-2">
            <h3>Add Your Image</h3>
            <form>
                <lable>
                    <input id="imgUrl" type='file'>
                </lable>
                <br>
                <p>Edit Image:</p>
                <button>Resize Image</button>
                <button>Move Image</button>
                <label>
                    Update Canvas Background
                    <input id="imgColor" type="color">
                </label>
            </form>
            <p class="img-msg"></p>
            <div class="step-buttons">
                <a class="button" href="#step-1">Choose Canvas</a>
                <a class="button right" href="#step-3">Convert to Pixels</a>
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




