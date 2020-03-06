// import { Component, OnInit } from '@angular/core';
// import * as L from 'leaflet';



// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   title = 'my-Map-Project';
//   map: any;
//   marker1: any;
//   mapGeoJSON: any;
//   googleMap: any;
//   baseMaps: any;
//   marker: any;
//   redIcon: any;
//   greenIcon: any;
//   clusterGroup: any;

// ngOnInit() {
//   this.mapSetup();
// }

//   mapSetup() {
//     // Base Map
//     const satellite = L.tileLayer('//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//       maxZoom: 20,
//       minZoom: 14,
//       attribution: '&copy; Esri &mdash; Sources: Esri, DigitalGlobe, Earthstar Geographics, CNES/Airbus DS, GeoEye, USDA FSA, USGS, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community',
//     }).addTo(this.map);

//     // const satelliteWithLabel = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
//     //   maxZoom: 20,
//     //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     // });

//     // const terrain = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//     //   maxZoom: 20,
//     //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     // });

//     // const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
//     //   maxZoom: 20,
//     //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     // });
//     // initialize the map on the "map" div with a given center and zoom
//     this.map = L.map('map', {
//       // map options
//       center: [29.749817, -95.080757],
//       zoom: 6,
//       minZoom: 0,
//       maxZoom: 20,
//       layers: [satellite],
//       attributionControl: false,
//       zoomControl: true,
//     });

// }
// }











import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private map;

  constructor() { }

  layersControl = {
    baseLayers: {
      'Street Maps': "asang",
    },
    overlays: {
      'Mt. Rainier Summit':"asa",
    }
  };

  ngAfterViewInit(): void {
  var mymap = L.map('map').setView([7.8731, 80.7718], 16);
   

L.tileLayer('//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 30,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);
 
var layerGroup = L.layerGroup().addTo(mymap);
var markerArray = [];
  
mymap.on('click', <LeafletMouseEvent>(e)=> {
    // var poplocation = e.latlng;
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    marker.addTo(layerGroup);
    var coordinates = [marker.getLatLng().lat, marker.getLatLng().lng];
    markerArray.push(coordinates);
    drawline(markerArray);
});

function drawline(marray){
  console.log(marray);
  var polyline = L.polyline(marray, {color: 'red'}).addTo(mymap);
  polyline.addTo(layerGroup);
}

  }
}
