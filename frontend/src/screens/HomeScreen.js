import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { getError } from '../utils.js';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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



 

  const [searchTerm, setSearchTerm] = useState('')
  const [attTerm, setattTerm] = useState('')

  

  return (
    <div>
      <main className='border border-dark rounded'>
        <h1 >All the pans at one place</h1>
        <input type="text" placeholder="Search..." 
         onChange={event => {setSearchTerm(event.target.value)}}/>
        <button value="a1" onClick={event => {setattTerm(event.target.value)}}>Attr. 1</button>
        <button value="a2" onClick={event => {setattTerm(event.target.value)}}>Attr. 2</button>
        <button value="a3" onClick={event => {setattTerm(event.target.value)}}>Attr. 3</button>
        <button value="a4" onClick={event => {setattTerm(event.target.value)}}>Attr. 4</button>
        <button value="a5" onClick={event => {setattTerm(event.target.value)}}>Attr. 5</button>
        <button value=""   onClick={event => {setattTerm(event.target.value)}}>Reset</button>
        
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
        <div className='pans '>
          {loading ? <p>is loading</p> : (
          <Card style={{ width: '32rem'}} className="Pan  border-dark">
            <Card.Img className="PanImage  border border-dark rounded " variant="top" src={`data:image/jpeg;base64,${pan.image.data.data.reduce((pre, cur) => pre + String.fromCharCode(cur),'')}`} />
            <Card.Body className="PanBody">
              <Card.Title><h1>{pan.name}</h1></Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary" style={{ width: '8rem'}} className=" border border-dark rounded">Subscribe</Button>
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