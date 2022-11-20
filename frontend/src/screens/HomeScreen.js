import React from 'react';
import data from '../data';

export default function HomeScreen() {
  return (
  <div>
    <div className='pans'>
      <main>
        <h1>All the pans at one place</h1>
        {data.pans.map(pan => (        
          <div className='pan'>       
            <img src={pan.image} alt={pan.name}></img>  
            <div className='PanInfo'>
              <p><b>{pan.brand}</b></p>  
              <hr></hr>    
              <br></br>
              <p>{pan.name}</p>   
              <p>{pan.atributes}</p>
              <button>Subsrcibe</button>
            </div>
          </div>))}       
      </main>
    </div>
  </div>
  );
}
