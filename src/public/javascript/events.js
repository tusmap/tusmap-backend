let destinationMarker;

kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
  const latlng = mouseEvent.latLng;
  if(!destinationMarker) {
    destinationMarker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()),
    });
    
    destinationMarker.setMap(map);
  } else destinationMarker.setPosition(latlng);
  
  if(!currentLocationMarker) return aAlert('위치 실패/현재 위치 불러오기 실패');
  
  const currentPosition = currentLocationMarker.getPosition();

  fetch('/api/searchTransPath', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      SX: currentPosition.getLng(),
      SY: currentPosition.getLat(),
      EX: latlng.getLng(),
      EY: latlng.getLat(),
    }),
  })
  .then(response => response.json())
  .then(data => {
    if(data.data.error) return aAlert(`오류/${data.data.error.msg}`);
    callMapObjApiAJAX(data.data['result']['path'][0].info.mapObj);
  }).catch(err => aAlert(`오류/${err}`));
});