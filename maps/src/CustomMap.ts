// Instructions to other classes on how to be an arg to 'addMarker'

export interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });

    }

    addMarker( mappable: Mappable ): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lng,
                lng: mappable.location.lng
            },
        });

        marker.addListener('click', () => {
            var HTMLcontent= `<div class="marker" style=color:${mappable.color};> ${mappable.markerContent()} </div>`;
            console.log(HTMLcontent);
            const infoWindow = new google.maps.InfoWindow({
                content: HTMLcontent,
            });
            infoWindow.open(this.googleMap, marker);
        });


    }
}