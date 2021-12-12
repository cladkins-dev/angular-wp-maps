import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";

//Setup an Interface for our Custom Marker
export interface CustomMarker {
  label: string;
  title: string;
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
  selector: "app-custom-gmaps",
  templateUrl: "./custom-gmaps.component.html",
  styleUrls: ["./custom-gmaps.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class CustomGmapsComponent implements OnInit {
  zoom = 12;

  //set our googlemaps center
  center: google.maps.LatLngLiteral = {
    lat: 36.8233688,
    lng: -76.1540059,
  };

  //setup google maps options
  options: google.maps.MapOptions = {
    mapTypeId: "roadmap",
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 8,
    zoom: 8,
  };

  //setup custom marker
  officeLocationOne: CustomMarker = {
    label: "Inmotion Hosting",
    title: "555 S Independence Blvd",
    position: {
      lat: 36.8233688,
      lng: -76.1540059,
    },
  };

  //setup custom marker
  officeLocationTwo: CustomMarker = {
    label: "Inmotion Hosting",
    title: "300 Union Blvd Ste 200",
    position: {
      lat: 39.7220291,
      lng: -105.1309678,
    },
  };

  //setup custom marker
  officeLocationThree: CustomMarker = {
    label: "Inmotion Hosting",
    title: "360 N Pacific Coast Hwy",
    position: {
      lat: 33.92044,
      lng: -118.394908,
    },
  };

  //assign markers to an array
  markers: CustomMarker[] = [
    this.officeLocationOne,
    this.officeLocationTwo,
    this.officeLocationThree,
  ];

  //setup some default marker options
  marker_options = { animation: google.maps.Animation.BOUNCE };

  //setup props
  latInput: any = 0;
  lngInput: any = 0;

  //handle other component references
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  ngAfterViewInit() {
    //leave for init methods
  }

  ngOnInit() {
    //Try to GeoLocate if we have perms.
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  //zoom in
  zoomIn() {
    if (this.options.maxZoom) {
      if (this.zoom < this.options.maxZoom) this.zoom++;
    }
  }

  //zoom out
  zoomOut() {
    if (this.options.minZoom) {
      if (this.zoom > this.options.minZoom) this.zoom--;
    }
  }

  //if we have lat and lng cordinates go to them.
  onInputSearch(lat: string, lng: string) {
    if (parseFloat(lat) && parseFloat(lng)) {
      this.center = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      };
    }
  }

  //go to marker location
  goToSecret(marker_number: number) {
    let marker = this.markers[marker_number || 0];
    this.center = {
      lat: marker.position.lat,
      lng: marker.position.lng,
    };
  }
}
