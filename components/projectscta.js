
class ProjectsCTA extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {

        this.innerHTML = `
            <style>
                .cta-container {
                    position: relative;
                    border: var(--border-comic);
                    background: linear-gradient(20deg, var(--primary-2), var(--primary-2-lt));
                    margin: 2rem 0;
                    overflow: hidden;
                }
                .cta-container img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    min-width: 100%;
                    min-height: 100%;
                    opacity: 5%;
                }
                .cta-overlay {
                    position: relative;
                    height: 100%;
                    min-height: 100%;
                }
                .cta-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 2rem;
                    padding: 4rem 2rem;
                    height: 100%;
                }
                .cta-container h2 {
                    font-size: 3.4rem;
                    font-family: var(--display); 
                    text-transform: uppercase;
                }
                .cta-content .btn {
                    font-size: 1.8rem;
                }
                
            </style>
            
            <section class="cta-container">
                <img src="./assets/burst_square_blk.svg" alt=""/>
                <div class="cta-overlay">
                    <div class="cta-content">
                        <h2 id="cta-heading">Want to see what I've been working on?</h2>
                        <a class="btn btn-alert" href="/projects.html">Let's see those projects!</a>  
                    </div>
                </div>
            </section>
        `;
      }
    }
  customElements.define('projectscta-component', ProjectsCTA);