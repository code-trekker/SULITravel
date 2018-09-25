import { Component, OnInit,ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-nearme',
  templateUrl: './nearme.component.html',
  styleUrls: ['./nearme.component.scss']
})
export class NearmeComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
		function myMap() {
			function showPosition(position) {
				
				var mapOptions = {
				center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), zoom: 18
			};
			var map = new google.maps.Map(mapCanvas, mapOptions);
		
		}
		
			var mapCanvas = document.getElementById("map");
			navigator.geolocation.getCurrentPosition(showPosition);
		}
		
  }

}
