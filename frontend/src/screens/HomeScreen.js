import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { getError } from '../utils.js';

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

  return (
    <div>
      {loading ? (
        'is loading '
      ) : (
        <img
          src={`data:image/jpeg;base64,${pans[0].image.data.data.reduce(
            (pre, cur) => pre + String.fromCharCode(cur),
            ''
          )}`}
          alt="testBild"
        />
      )}
    </div>
  );
}
