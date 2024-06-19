
class GalleryCTA extends HTMLElement {
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
                            <h2 id="cta-heading">Want to see what's new in the design gallery?</h2>
                            <a class="btn btn-alert" href="/gallery.html">Ooh, let's go!</a>  
                        </div>
                    </div> 
            </section>
        `;
      }
    }
  customElements.define('gallerycta-component', GalleryCTA);