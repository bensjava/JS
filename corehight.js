window.onload = function () {
  initMap();
};

function addMarkerInfo() {
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString =
      '<div class="popupwidth">' +
      '<div class="details">' +
      "<div>" +
      "<p>" +
      "<span> Project: </span>" +
      markersOnMap[i].placeJob +
      "</p>" +
      "<p>" +
      "<span>Date: </span>" +
      markersOnMap[i].placeDate +
      "</p>" +
      "<p>" +
      "<span>User: </span>" +
      markersOnMap[i].placeVendor +
      "</p>" +

      "</div>" +
      "</div>" +
      "</div>";

    const marker = new google.maps.Marker({
      position: markersOnMap[i].latLng[0],
      icon: icons[markersOnMap[i].type].icon,
      map: map
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InfoObj[0] = infowindow;
    });
  }
}

function closeOtherInfo() {
  if (InfoObj.length > 0) {
    InfoObj[0].set("marker", null);
    InfoObj[0].close();
    InfoObj[0].length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: centerCords
  });
  addMarkerInfo();
}
