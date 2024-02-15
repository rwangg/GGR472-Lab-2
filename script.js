mapboxgl.accessToken = 'pk.eyJ1Ijoicmx3YW5nZ2ciLCJhIjoiY2xzbXJrdDh4MHFhbTJpbGZtN2U2dzR0ciJ9.U_Ub-r562iDi82ImPZACXQ'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-79.39, 43.66], // starting position [lng, lat]
    zoom: 12, // starting zoom
});

map.on('load', () => {

    //Add a data source containing GeoJSON data
    map.addSource('sushi-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/rwangg/GGR472-Lab-2/main/top3sushi.geojson'
    });

map.addLayer({

    // Style of points
    'id': 'sushi-pnt',
    'type': 'circle',
    'source': 'sushi-data',
    'paint': {
    'circle-radius': 6,
    'circle-color': '#B42222'
    }
    })
});