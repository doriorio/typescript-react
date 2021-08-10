/// <reference types="google.maps" />

let map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
}