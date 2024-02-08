class Banner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                /* PAGE BANNERS */
                .banner {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    color: var(--neutral-lt);
                    background: linear-gradient(var(--primary), var(--neutral-dk));
                    padding: 5rem 4rem 6rem 4rem;
                }
                .banner-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 4rem;
                }
                .banner-text {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 370px;
                    font-size: 1.6rem;
                    line-height: 1.5;
                }
                .banner h1 {
                    text-transform: uppercase;
                    line-height: 1.2;
                }
                .banner h1 span:first-child {
                    font-size: 3.7rem;
                    font-weight: 300;
                    color: var(--accent-3);
                }
                .banner h1 span:nth-child(2) {
                    font-size: 4.5rem;
                    display: block;
                    font-weight: 800; 
                }
                .banner-social {
                    padding-top: 4rem;
                    border-top: 1px solid var(--neutral-mddk);
                }
                .banner-links {
                    display: flex;
                    gap: 2rem;
                    padding-top: 2rem;
                }
                .banner a {     
                    display: flex;
                    align-items: center;
                    justify-content: center;               
                    font-size: 3rem;
                    font-weight: 500;
                    background: var(--accent-2);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    transition: var(--transition);
                }
                .banner a:hover {
                    text-decoration: none;
                    background: var(--neutral-lt);
                }

                @media screen and (min-width: 900px) {
                .banner-content {
                    align-items: center;
                    flex-direction: row;
                    gap: 10rem;
                }
                .banner-social {
                    padding-bottom: 4rem;
                    border-bottom: 1px solid var(--neutral-mddk);
                }
            } 
            
            </style>
            <header class="banner">
                <div class="banner-content">
                    <div class="banner-text">
                        <h1><span>Hello, World.</span><span>I'm Christa.</span></h1>
                        <p>I love building, creating, and solving problems with technology, and enjoy learning to keep it secure and running smoothly along the way.</p>
                    </div>
                    <div class="banner-social">
                        <h2 class="normal">Join me on...</h2>
                        <div class="banner-links">
                            <a href="https://github.com/christadejesus" target="_blank" rel="noopener noreferrer"><i class="ri-github-line"></i></a>
                            <a href="https://facebook.com/christa.dejesus" target="_blank" rel="noopener noreferrer"><i class="ri-facebook-line"></i></i></a>
                            <a href="https://codepen.io/christadejesus" target="_blank" rel="noopener noreferrer"><i class="ri-codepen-line"></i></i></a>
                        </div>
                    </div>
                </div>
            </header>
        `;
      }
    }
  customElements.define('banner-component', Banner);