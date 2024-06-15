function showMenu() {
    document.getElementById("links-container").classList.toggle("show");
}

class TopNav extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .topnav {
                    position: relative;                
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    height: var(--topnav-height);
                    z-index: 1000;
                }

                .topnav .text {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .topnav .name {
                    display: flex;
                    flex-direction: column;
                    font-family: var(--display);
                    text-transform: uppercase;
                    font-size: 3rem;
                    font-weight: 500;
                    line-height: var(--line-height-xsm);
                }
                .topnav .name:hover {
                    color: var(--primary-1);
                }
                .links-container {
                    position: absolute;
                    top: var(--topnav-height);
                    right: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    background: var(--neutral-dkdk);
                    overflow: hidden;
                    height: 100vh;
                    width: 0;
                    padding: 4rem 0 8rem 0;
                    transition: all ease-in-out 300ms;
                }
                .show {
                    padding: 4rem 2rem 8rem 2rem;
                    width: 100%;
                }
                .nav-link {
                    color: var(--primary-3);
                    font-family: var(--comic);
                    font-size: 2.6rem;
                }
                .nav-link:hover {
                    color: var(--neutral-lt);
                }
                .social-links-container {
                    display: flex;
                    gap: 1rem;
                    margin-top: 4rem;
                }
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                    background: var(--neutral-lt);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                .social-link:hover {
                    background: var(--primary-2);
                }
                @media screen and (min-width: 550px) {
                    .topnav .name {
                        font-size: 3rem;
                    }
            </style>

            <header class="topnav">
                <div class="text">
                    <a class="name" href="/index.html"><span>Christa</span><span>DeJesus</span></a>
                </div>
                <div>
                    <button class="btn btn-dk btn-sm" onclick="showMenu()">Contents</button>
                </div>
                <nav class="links-container" id="links-container">
                    <a href="/" class="nav-link">home</a>
                    <a href="/about.html" class="nav-link">about</a>
                    <a href="/projects.html" class="nav-link">projects</a>
                    <a href="/gallery.html" class="nav-link">gallery</a>
                    <div class="social-links-container">
                        <a href="https://github.com/christadejesus" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-github-line"></i></a>
                        <a href="https://codepen.io/christadejesus" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-codepen-line"></i></a>
                        <a href="https://linkedin.com/in/christatech" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-line"></i></a>
                    </div>
                </nav>
            </header>
        `;
      }
    }
  customElements.define('topnav-component', TopNav);