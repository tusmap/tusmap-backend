const socket = io();

socket.on('connect', () => console.log(socket.id));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const clientId = urlParams.get('id');

socket.emit('join', clientId);

socket.on('setPosition', data => {
  map.panTo(new kakao.maps.LatLng(data.latitude, data.longitude));
});