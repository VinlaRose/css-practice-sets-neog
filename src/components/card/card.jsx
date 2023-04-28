import "./card.css"

import lizard from "../../images/lizard.jpg";

export const Card = () => {
    return(
        <article className="card-container-q3">
            <div className="image-container">
            <img src={lizard} alt=""/>

            </div>
            
            <footer>
                <p className="heading-card">Lizards</p>
                <p className="card-content">Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic island chains</p>
                <a href="/">SHARE</a> <a href="/">LEARN MORE</a>
            </footer>
        </article>
    )
}