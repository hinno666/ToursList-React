import { useEffect, useState } from "react";
import { Tours } from "./Tours";
import { Loading } from "./Loading";
const API_LINK = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false)

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours);slick
  }

  const getTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_LINK)
      const tours = await response.json()
      setLoading(false)
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={() => getTours()}>refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour}/>
    </main>
  )
};
export default App;
