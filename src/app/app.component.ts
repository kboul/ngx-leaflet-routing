import { Component } from '@angular/core';
import { 
	latLng, 
	Map, 
	tileLayer, 
	circle, 
	polygon, 
	marker,
	icon
} from 'leaflet';

import * as L from 'leaflet';

import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
				maxZoom: 18, attribution: '...' 
			})
		],
		zoom: 9,
		center: latLng(46.879966, -121.726909)
	};

	layers = [
		circle([ 46.95, -122 ], { radius: 5000 }),
		polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
		marker([ 46.879966, -121.726909 ], {
			icon: icon({
				iconSize: [ 25, 41 ],
				iconAnchor: [ 13, 41 ],
				iconUrl: 'leaflet/marker-icon.png',
				shadowUrl: 'leaflet/marker-shadow.png'
			  })
		})
	];
}
