const socket = io();

socket.on('connect', () => console.log(socket.id));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const clientId = urlParams.get('id');

socket.emit('join', clientId);

let currentLocationMarker;

socket.on('setPosition', data => {
  if(currentLocationMarker) currentLocationMarker.setMap(null);
  const imageSrc = '/assets/location.svg';
  const imageSize = new kakao.maps.Size(26, 26);
  const imageOption = {offset: new kakao.maps.Point(13, 13)};

  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  const markerPosition = new kakao.maps.LatLng(data.latitude, data.longitude);

  const marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage
  });

  map.panTo(new kakao.maps.LatLng(data.latitude, data.longitude));

  marker.setMap(map);
  currentLocationMarker = marker;
});