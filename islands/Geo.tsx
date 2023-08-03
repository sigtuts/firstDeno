export default function Geo() {
  let geo =[]
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
      geo.push(latitude)
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  return (
    <div>
      <p>You are at LAT{geo[0] | 'nothing'}</p>
    </div>
  );
}
