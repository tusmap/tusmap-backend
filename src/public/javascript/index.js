const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(37.342331, 126.830149),
  level: 3
};

const map = new kakao.maps.Map(container, options);