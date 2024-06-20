class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .page-footer {
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 4rem;
                    font-family: var(--comic);
                    color: var(--neutral-lt);
                    background: var(--neutral-dkdk);
                    text-align: center;
                    } 

                .social-container {
                     max-width: 400px;
                     margin: 0 auto;
                }
                .social-container h2 {
                    font-family: var(--cursive);
                    font-weight: 400;
                    font-size: 4rem;
                    margin-bottom: 2rem;
                }
                .social-links {
                    display: flex;
                    justify-content: space-evenly;
                    margin-bottom: 4rem;
                }
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    width: 40px;
                    background: var(--neutral-lt);
                    color: var(--neutral-dkdk);
                    font-size: 2.4rem;
                    border-radius: 50%;
                }
                .social-links a:hover {
                    background: var(--primary-3);
                }
                .copy {
                    font-size: 1.4rem;
                    padding-top: 4rem;
                    border-top: 1px solid var(--primary-2);
                }
            </style>
            <footer class="page-footer" id="page-footer">
                <div class="social-container">
                    <h2>Join me on...</h2>
                    <div class="social-links">
                        <a href="https://github.com/christadejesus" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i></a>
                        <a href="https://codepen.io/christadejesus" target="_blank" rel="noopener noreferrer"><i class="ri-codepen-fill"></i></a> 
                        <a href="https://linkedin.com/in/christatech" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-fill"></i></a>
                        <a href="https://facebook.com/christa.dejesus" target="_blank" rel="noopener noreferrer"><i class="ri-facebook-fill"></i></a> 
                    </div>
                </div>
                <p class="copy">&copy;2024 Christa DeJesus. All images, artwork, and content are subject to copyright. </p>
            </footer>
        `;
      }
    }
  customElements.define('footer-component', Footer);