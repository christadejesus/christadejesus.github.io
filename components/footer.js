class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .page-footer {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 100%;
                    height: var(--topnav-height);
                    background: var(--primary);
                    color: var(--neutral-lt);
                    } 
                .page-footer a {
                    color: inherit;
                } 
                .page-footer a:hover {
                    color: var(--accent-2);
                    text-decoration: none;
                }
            </style>
            <footer class="page-footer">
                <p>&copy;2024 <a href="" target="_blank" rel="noopener noreferrer">Christa DeJesus</a></p>
            </footer>
        `;
      }
    }
  customElements.define('footer-component', Footer);