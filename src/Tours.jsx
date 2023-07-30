import { Tour } from "./Tour"

export const Tours = () => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="title-underline"></div>
                <div className="tours">
                <Tour />
                </div>
            </div>
        </section>
    )
}