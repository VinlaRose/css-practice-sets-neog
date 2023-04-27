import child from '../../images/child.jpg'
import "./imageCard.css"

export const ImageCard = () => {
    return(
        <div>
        
        <article className='parent-q1'>
            <img  src={child} alt="My Image" />
              <footer  >
                <h3>Card Decription</h3>
                <p>Card title</p>
              </footer>
        </article>
        </div>

    )
}