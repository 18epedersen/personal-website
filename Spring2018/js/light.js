/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#15A892",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#15A892",
    "color": "#15A892"
  },

  "areasSettings": {
    "unlistedAreasColor": "#7EB6FF"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Seattle",
      "latitude": 47.608013,
      "longitude": -122.335167
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Reno",
      "latitude": 39.530895,
      "longitude": -119.814972
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Santa Fe",
      "latitude": 35.691544,
      "longitude": -106.716591
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Berkeley",
      "latitude": 37.871853,
      "longitude": -122.258423
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New York City",
      "latitude": 40.730610,
      "longitude": -73.935242
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "url": "http://www.google.co.uk"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Boston",
      "latitude": 42.361145,
      "longitude": -71.057083
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Orlando",
      "latitude": 28.538336,
      "longitude": -81.379234
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Los Angeles",
      "latitude": 34.052235,
      "longitude": -118.243683,
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Hawaii",
      "latitude": 21.289373,
      "longitude": -157.917480
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "San Francisco",
      "latitude": 37.733795,
      "longitude": -122.446747
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Palo Alto",
      "latitude": 37.468319,
      "longitude": -122.143936
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Toronto",
      "latitude": 43.653908,
      "longitude": -79.384293
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington DC",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Mountain View",
      "latitude": 37.386051,
      "longitude": -122.083855
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Zurich",
      "latitude": 47.373878,
      "longitude": 8.545094
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Montreal",
      "latitude": 45.537258,
      "longitude": -73.629768
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Niagara Falls ON",
      "latitude": 43.093281,
      "longitude": -79.068100
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Munich",
      "latitude": 48.137154,
      "longitude": 11.576124
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Rome",
      "latitude": 41.890251,
      "longitude": 12.492373
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Venice",
      "latitude": 45.434307,
      "longitude": 12.339159
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Oslo",
      "latitude": 59.911491,
      "longitude": 10.757933
    },
    {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Shanghai",
      "latitude": 31.239752	,
      "longitude": 121.499588
    }  ]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
