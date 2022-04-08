import React from 'react';
import * as ReactDOM from 'react-dom';
import { Scene,WebMap,WebScene,Map } from '@esri/react-arcgis';
import Campus from './campus'; 
function App(){
  ReactDOM.render(
    
        <Scene />
   ,
  document.getElementById('root')
);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (_props) => (
  <Scene style={{ width: '70vw', height: '90vh' }} 
      mapProperties={{ basemap: 'satellite' }}
      viewProperties={{
          center: [-118.28538,34.0205],
          zoom: 15
      }}>
      <Campus />
  </Scene>
)
