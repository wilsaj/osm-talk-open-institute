import React from "react/addons";
import { Map, TileLayer } from 'react-leaflet';

import config from "../presentation/config";

class LeafletMap extends React.Component {
  render() {
    const views = {
      austin: {
        center: [30.28, -97.7500],
        zoom: 14
      },
      lisboa: {
        center: [38.719983, -9.147491],
        zoom: 14
      },
      porto: {
        center: [41.147944, -8.619105],
        zoom: 13
      },
      portugal: {
        center: [39.951859, -7.437500],
        zoom: 7
      },
    }


    let style = {
      width: '100%',
      height: config.height,
      margin: '0 auto',
    };

    const view = views[this.props.view];

    return (
      <Map style={style} center={view.center} zoom={view.zoom}>
        <TileLayer
          url={this.props.url}
          attribution={this.props.attribution}
        />
      </Map>
    );
  }
}

export default LeafletMap;
