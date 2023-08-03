 export default function Geo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  return(
    <div>
      <p>You are at LAT</p>
    </div>
  )
}
