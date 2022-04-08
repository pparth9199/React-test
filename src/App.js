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

export default App;
