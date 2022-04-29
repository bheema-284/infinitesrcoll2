import axios from 'axios'
import { useEffect ,useState} from 'react'
import "../App.css"

export const Home = () =>{
     const [mockData, setMockData] = useState([]);
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(5);
const [loading, setLoading] = useState(true);
const [err, setErr] = useState(false);
const perPage = 5;
const getData = (page, perPage) => { 
    setLoading(true);
    setErr(false);
  axios(`https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`, {
    method: 'GET',
    params: { _page: page, _limit: perPage },
  })
    .then((res) => {   
        setLoading(false);   
      setMockData(res.data.data);
      console.log(res.data.data);
    })
    .catch((er) => {
      console.log(er); 
      setMockData([]);
      setErr(true);
      setLoading(false);          
    });
};
useEffect(() => {
  getData(page, perPage);
}, [page, perPage]);

    return (
      <div>
        <h1 id="data1">Infinite Scrolling </h1>
        {err && <div className="error"> Something went wrong! Try again </div>}
        {mockData.map((el) => {
          return (
            <div key={el.id} id="data">
              <p>{el.id}.</p>
              <p>{el.quote}</p>
            </div>
          );
        })}

        <div id="btns">
          {loading && <div>...loading</div>}
          <button
            disabled={loading || page === 1}
            onClick={() => setPage((page) => page - 1)}>
            PREV
          </button>
          <button
            disabled={loading || !mockData}
            onClick={() => setPage(page + 1)}>
            NEXT
          </button>
          <div>Current page: {page}</div>
        </div>
      </div>
    );
}



