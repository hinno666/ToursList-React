import { useState } from "react"

export const Tour = ({ id, name, image, info, price, deleteTour}) => {

    const [showText, setShowText] = useState(false)

    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className="tour-price">{price} $</span>
            <div className="tour-info">
                <h4>{name}</h4>
                <p>{showText ? info : `${info.substring(0, 200)}...` }
                    <button className="info-btn" onClick={() => setShowText(!showText)}>read more</button>
                    <button className='delete-btn btn-block btn' onClick={()=> deleteTour(id)}>Dont interesting</button>
                </p>
            </div>
        </article>
    )
}