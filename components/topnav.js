function showMenu() {
    document.getElementById("links-container").classList.toggle("show");
    document.getElementById("menu-btn").classList.toggle("open");
}

class Topnav extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .top-nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: var(--topnav-height);
                    background: var(--neutral-lt);
                    padding: 0 2rem;
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .logo {
                    font-family: var(--display);
                    font-size: 3rem;
                    text-transform: uppercase;
                    line-height: 0.8;
                    display: flex;
                    flex-direction: column;
                }
                .menu-btn {
                    font-size: 3rem;
                    transition: all 300ms ease-in-out;
                }
                .menu-btn:hover {
                    color: var(--neutral-dkdk);
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
                    z-index: 1000;
                }
                .nav-link {
                    color: var(--neutral-lt);
                    font-family: var(--comic);
                    font-size: 2.4rem;
                }
                .nav-link:hover {
                    color: var(--primary-1-lt);
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
                .show {
                    padding: 4rem 2rem 8rem 2rem;
                    width: 100%;
                }
                .open {
                    transform: rotate(90deg);
                }
            </style>

            <header class="top-nav">
                <p class="logo"><span>Christa</span><span>DeJesus</span></p>
                <button class="menu-btn" id="menu-btn" onclick="showMenu()"><i class="ri-menu-fill"></i></button>
                <nav class="links-container" id="links-container">
                    <a href="/projects.html" class="nav-link">projects</a>
                    <a href="/gallery.html" class="nav-link">gallery</a>
                    <a href="/index.html" class="nav-link">home</a>
                    <a href="/about.html" class="nav-link">about</a>
                    <div class="social-links-container">
                        <a href="https://github.com/christadejesus" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i></a>
                        <a href="https://codepen.io/christadejesus" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-codepen-fill"></i></a>
                        <a href="https://linkedin.com/in/christatech" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-fill"></i></a>
                        <a href="https://facebook.com/christa.dejesus" class="social-link" target="_blank" rel="noopener noreferrer"><i class="ri-facebook-fill"></i></a> 
                    </div>
                </nav>
            </header>
        `;
      }
    }
  customElements.define('topnav-component', Topnav);