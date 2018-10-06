import { Component } from '@angular/core';
import { 
	latLng, 
	tileLayer, 
	Icon, icon, Marker
} from 'leaflet';

import 'leaflet';
import 'leaflet-routing-machine';
declare let L;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
				attribution: '© OpenStreetMap contributors'
			})
		],
		zoom: 1,
		center: latLng(46.879966, -121.726909)
	};

	// Override default Icons
	private defaultIcon: Icon = icon({
		iconUrl: 'assets/marker-icon.png',
		shadowUrl: 'assets/marker-shadow.png'
	});
	
	ngOnInit() {
		Marker.prototype.options.icon = this.defaultIcon;
	}

	onMapReady(map: L.Map) {
		L.Routing.control({
			waypoints: [
			  	L.latLng(57.74, 11.94),
			  	L.latLng(57.6792, 11.949)
			],
			routeWhileDragging: true
		}).addTo(map);
	}
}
