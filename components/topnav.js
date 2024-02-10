class TopNav extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .topnav-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: var(--topnav-height);
                    background: var(--neutral-dkdk);
                    padding: 0 10%;
                    z-index: 1000;
                }
                .topnav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 800px;
                }
                .topnav a {                  
                    transition: var(--transition);
                    color: var(--neutral-lt);
                }
                .topnav a:hover {
                    color: var(--primary-3);
                }  
            
            </style>
            <header class="topnav-container" id="top">
                <nav class="topnav">
                    <a href="/index.html">home</a>
                    <a href="/portfolio.html">portfolio</a>
                    <a href="/about.html">about</a>
                </nav>
            </header>
        `;
      }
    }
  customElements.define('topnav-component', TopNav);