import { useEffect, useState } from "react";
import { Tours } from "./Tours";
import { Loading } from "./Loading";
const API_LINK = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true)

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours);
  }

  const getTours = async () => {
    try {
      const response = await fetch(API_LINK)
      const tours = await response.json()
      setLoading(false)
      setTours(tours);
      console.log(tours);
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

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour}/>
    </main>
  )
};
export default App;
