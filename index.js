// Import stylesheets
import './style.css';
import { Map, TileLayer } from 'leaflet';
// Write Javascript code!
const map = new Map('map');

const layer = new TileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  {
    id: 'mapbox/streets-v11',
  }
);

layer.addTo(map);

map.setView([30.29726893943521, 120.06622904484556], 17);
