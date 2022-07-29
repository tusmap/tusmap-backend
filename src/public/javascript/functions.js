function drawPolyLine(data) {
  let lineArray;

  for(let i of data.result.lane) {
    for(let j of i.section) {
      lineArray = null;
      lineArray = new Array();
      for(let k of j.graphPos) {
        lineArray.push(new kakao.maps.LatLng(k.y, k.x));
      }

      if(i.type == 1) {
        let polyline = new kakao.maps.Polyline({
          map: map,
          path: lineArray,
          strokeWeight: 3,
          strokeColor: '#003499',
        });
      } else if(i.type == 2) {
        let polyline = new kakao.maps.Polyline({
          map: map,
          path: lineArray,
          strokeWeight: 3,
          strokeColor: '#37b42d'
        });
      } else {
        let polyline = new kakao.maps.Polyline({
          map: map,
          path: lineArray,
          strokeWeight: 3
        });
      }
    }
  }
}

function callMapObjApiAJAX(mabObj) {
  const xhr = new XMLHttpRequest();
  const url = `https://api.odsay.com/v1/api/loadLane?mapObject=0:0@${mabObj}&apiKey=${apiKey}`;
  xhr.open('GET', url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      drawPolyLine(data);
    }
  }
  xhr.send();
}