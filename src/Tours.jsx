import { Tour } from "./Tour"

export const Tours = ({ tours, deleteTour }) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="title-underline"></div>
                <div className="tours">
                    {tours.map((tour) => {
                        return <Tour key={tour.id} {...tour} deleteTour={deleteTour}/>
                    })}
                </div>
            </div>
        </section>
    )
}