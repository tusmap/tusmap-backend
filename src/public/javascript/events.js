let destinationMarker;

kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
  const latlng = mouseEvent.latLng;
  if(!destinationMarker) {
    destinationMarker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()),
    });
    
    destinationMarker.setMap(map);
  } else destinationMarker.setPosition(latlng);
  
  if(!apiKey) return alert('api key 발급 실패');
  if(!currentLocationMarker) return alert('현재 위치 불러오기 실패');
  
  const currentPosition = currentLocationMarker.getPosition();

  const xhr = new XMLHttpRequest();
  const url = `https://api.odsay.com/v1/api/searchPubTransPath?SX=${currentPosition.getLng()}&SY=${currentPosition.getLat()}&EX=${latlng.getLng()}&EY=${latlng.getLat()}&apiKey=${apiKey}`;
  xhr.open('GET', url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      if(data.error) return alert(data.error.msg);
      callMapObjApiAJAX(data['result']['path'][0].info.mapObj);
    }
  }
  xhr.send();
});