import "./infoCard.css"
import pic1 from "../../images/pic1.jpg"

export const InfoCard = () => {
    return(
        <div className="q3">
            <h3 className="q3-h3">Q2 CSS Practice Set 2</h3>
            <article className="article-q3">
                <img src={pic1} alt=" " />
                <footer  >
                <h3>Card Decription</h3>
                <p>Card title</p>
              </footer>
            </article>
        </div>
    )
}