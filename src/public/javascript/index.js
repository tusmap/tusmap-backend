let apiKey;

onload = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/key');
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      apiKey = data.key;
    }
  }
  xhr.send();
}

const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(37.342331, 126.830149),
  level: 3
};

const map = new kakao.maps.Map(container, options);