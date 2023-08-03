 export default function Geo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function go (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
      return latitude
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  return(
    <div>
      <p>You are at LAT{go()}</p>
    </div>
  )
}
