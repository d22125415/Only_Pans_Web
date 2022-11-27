import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { getError } from '../utils.js';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { Store } from '../Store.js';
import { useNavigate } from 'react-router-dom';

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

export default function HomeScreen() {
  const [{ loading, pans }, dispatch] = useReducer(reducer, {
    pans: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`http://localhost:3600/api/pans/`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
      }
    };
    fetchData();
  }, []);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;

 

  const [searchTerm, setSearchTerm] = useState('')
  const [attTerm, setattTerm] = useState('')
  const navigate = useNavigate();

  const sub = async ( panid) => {
    if(!userInfo){
      navigate('/signin')
      return
    }
    
    const result = await axios.post("http://localhost:3600/api/user/subscribe", {
    "userToken": userInfo.userToken,
    "pan_id": panid
  })
  ctxDispatch({ type: 'USER_SIGNIN', payload: result.data });
  localStorage.setItem('userInfo', JSON.stringify(result.data));
  }

  return (
    <div>
      <main >
        <h1 >All the pans at one place</h1>
        <input type="text" placeholder="Search..." 
         onChange={event => {setSearchTerm(event.target.value)}}/>
        <select onChange={event => {setattTerm(event.target.value)}}>
          <option value="">Attributes</option>
          <option value="Cheap">Cheap</option>
          <option value="Expensive">Expensive</option>
          <option value="Light">Light</option>
          <option value="Heavy">Heavy</option>
          <option value="Durable">Durable</option>
        </select>
        
        {pans.filter(pan => {
          let allAtributes = pan.attributes.reduce((b, a) => b + a);
          if (attTerm === ""){
            return pan
          }
          else if (allAtributes.includes(attTerm)){
            return pan
          }

        }).filter(pan => {
          if (searchTerm === ""){
              return pan
             } else if (pan.name.toLowerCase().includes(searchTerm.toLowerCase())){
               return pan
             }
        }).map(pan => (        
        <div className='pans ' key={pan.id}>
          {loading ? <p>is loading</p> : (
          <Card style={{ width: '32rem'}} className="Pan  border-dark">
            <Card.Img className="PanImage  border border-dark rounded " variant="top" src={`data:image/jpeg;base64,${pan.image.data.data.reduce((pre, cur) => pre + String.fromCharCode(cur),'')}`} />
            <Card.Body className="PanBody">
              <Card.Title><h1>{pan.name}</h1></Card.Title>
              <Card.Text>
                {pan.description}
              </Card.Text>
              <Button variant="primary" style={{ width: '8rem'}} disabled={!userInfo?.pans && userInfo?.pans?.filter(checkpanid =>  checkpanid === pan.id)} className=" border border-dark rounded" onClick={(event) => sub(pan.id)} >Subscribe</Button>
            </Card.Body>

          </Card>
          )}
        </div>))}    
      </main>
    </div>
  );
}

// if (searchTerm === ""){
//   return pan
// } else if (pan.name.toLowerCase().includes(searchTerm.toLowerCase())){
//   return pan
// }