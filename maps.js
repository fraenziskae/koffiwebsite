document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([52.030228, 8.532471], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var cafes = [
    { name: "mellow gold", lat: 52.030228, lng: 8.532471, rating: 4.5 },
    { name: "m cafe", lat: 52.025228, lng: 8.540471, rating: 4.0 },
    { name: "casa", lat: 52.040228, lng: 8.525471, rating: 4.7 },
    { name: "venue", lat: 52.020228, lng: 8.515471, rating: 4.3 },
    { name: "bernstein", lat: 52.035228, lng: 8.550471, rating: 4.8 },
  ];

  cafes.forEach(function (cafe) {
    L.marker([cafe.lat, cafe.lng])
      .addTo(map)
      .bindPopup(
        "<b>" + cafe.name + "</b><br>bewertung: " + cafe.rating + " Sterne",
      )
      .openPopup();
  });
});
