import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { getError } from '../utils.js';
import { useContext } from 'react';
import { Store } from '../Store.js';

import Card from 'react-bootstrap/Card';
import {useState} from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        pans: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};




export default function FeedScreen() {
  const [{ loading, pans }, dispatch] = useReducer(reducer, {
    pans: [],
    loading: true,
    error: '',
  });
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;

  let n = userInfo.userToken
  let n2 = `http://localhost:3600/api/user/pans/` + n


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {

        const result = await axios.get(n2);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
      }
    };
    fetchData();
  }, []);





  function custom_sort(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }
  
  let test= [...pans];
  test.sort(custom_sort);


  const [sortterm, setsortterm] = useState('')

  return (
    <div>
      <main className='border border-dark rounded'>
      <h1 >All the subscribed pans</h1>
      <button onClick={event => {setsortterm(event.target.value)}} value="true">Sort by date</button>
      <button onClick={event => {setsortterm(event.target.value)}} value="">Reset</button>


      {sortterm ? <div>{test.map(pan => <div className='pans '>{loading ? <p>is loading</p> : (<Card style={{ width: '32rem'}} className="Pan  border-dark"><Card.Text  >{new Date(pan.date).toLocaleString("lookup")}</Card.Text><Card.Img className="PanImage  border border-dark rounded " variant="top" src={`data:image/jpeg;base64,${pan.data.data.reduce((pre, cur) => pre + String.fromCharCode(cur),'')}`} /><Card.Body className="PanBody"><Card.Title><h1>{pan.name}</h1></Card.Title><Card.Text>{pan.description}</Card.Text></Card.Body></Card>)}</div>)} </div> 
      : 
      <div>{pans.map(pan => <div className='pans '>{loading ? <p>is loading</p> : (<Card style={{ width: '32rem'}} className="Pan  border-dark"><Card.Text  > {new Date(pan.date).toLocaleString("lookup")}</Card.Text><Card.Img className="PanImage  border border-dark rounded " variant="top" src={`data:image/jpeg;base64,${pan.data.data.reduce((pre, cur) => pre + String.fromCharCode(cur),'')}`} /><Card.Body className="PanBody"><Card.Title><h1>{pan.name}</h1></Card.Title><Card.Text>{pan.description}</Card.Text></Card.Body></Card>)}</div>)}</div>}
      




      

  
      </main>
    </div>
  );
}

//src={`data:image/jpeg;base64,${pan.image.data.data.reduce((pre, cur) => pre + String.fromCharCode(cur),'')}`}


// {pans.map(pan => 

//   <div className='pans '>
//   {loading ? <p>is loading</p> : (
//   <Card style={{ width: '32rem'}} className="Pan  border-dark">
//     <Card.Img className="PanImage  border border-dark rounded " variant="top" src={`data:image/jpeg;base64,${pan.image.data.data.reduce((pre, cur) => pre + String.fromCharCode(cur),'')}`} />
//       <Card.Body className="PanBody">
//         <Card.Title><h1>{pan.name}</h1></Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     )}
//   </div>
// )}