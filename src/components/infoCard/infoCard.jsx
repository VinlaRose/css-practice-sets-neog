import "./infoCard.css"
import pic1 from "../../images/pic1.jpg"

export const InfoCard = () => {
    return(
            <article className="article-q3">
                <img src={pic1} alt=" " />
                <footer  >
                <h3>Card Decription</h3>
                <p>Card title</p>
              </footer>
            </article>
        
    )
}