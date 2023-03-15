class ButtonCount extends HTMLElement {
    constructor() {
        super(); 

        let buttonElement = document.createElement("button");
        let clickCount = 0;

        const shadow = this.attachShadow({ mode: "open" });

        buttonElement.innerText = "Times Clicked: " + clickCount;

        buttonElement.addEventListener('click', () => {
            clickCount++;
            buttonElement.innerText = "Times Clicked: " + clickCount;
        });

        shadow.append(buttonElement);
    }
}

customElements.define("button-count", ButtonCount);
