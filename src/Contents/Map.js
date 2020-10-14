import React from 'react'
import {useState} from 'react'
import ReactMapGL, {Marker}from 'react-map-gl'





const Map = () => {

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 5.6037,
        longitude: -0.1870,
        zoom: 8
      });

    return(
        <div>

<ReactMapGL
      {...viewport} mapboxApiAccessToken={'pk.eyJ1IjoibnBtMTAiLCJhIjoiY2tnOWUzd2pzMDBmMTJ0cGdhdWllZ2tuNCJ9.RootHaADay_ceb30kYJZTw'}
      mapStyle='mapbox://styles/npm10/ckg9gh4uk02sb19qqsngp79uk'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
            
            
        </div>
    )
}

export default Map
