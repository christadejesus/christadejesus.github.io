class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .topnav-container {
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: var(--topnav-height);
                    background: var(--primary);
                    color: var(--neutral-lt);
                    padding: 0 2rem;
                    z-index: 1000;
                }
                .topnav {
                   width: 100%; 
                }
                .topnav-links {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 800px;
                    list-style-type: none;
                    margin: 0 auto;
                }
                .topnav-link a {
                    padding: 8px 16px;
                    border: 2px solid transparent;
                    border-radius: 30px;
                    transition: var(--transition);
                    font-size: 1.6rem;
                    letter-spacing: 1.5;
                    text-transform: lowercase;
                    color: var(--neutral-lt);
                }
                .topnav-link a:hover {
                    border-color: var(--accent-4);
                    text-decoration: none;
                }  
                .current {
                    border-color: var(--accent-2);
                    text-decoration: none;
                }
            
            </style>
            <header class="topnav-container">
                <nav class="topnav">
                    <ul class="topnav-links">
                        <li class="topnav-link"><a href="/index.html">home</a></li>
                        <li class="topnav-link"><a href="/about.html">about</a></li>
                        <li class="topnav-link"><a href="/portfolio.html">portfolio</a></li>
                        <li class="topnav-link"><a href="/connect.html">connect</a></li>                    
                    </ul>
                </nav>
            </header>
        `;
      }
    }
  customElements.define('header-component', Header);