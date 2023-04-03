export const GoogleMaps = ({ lat, lng }) => {
  // var lat=24.86965938573058;
  // var lng = 67.06036816202841;
  const url = `https://maps.google.com/maps?q=${lat},${lng}&z=20&output=embed`;
  return (
    <div className="App">
      <iframe
        width="600"
        height="240"
        style={{ border: 0 }}
        src={url}
        allowFullScreen
      ></iframe>
    </div>
  );
};
