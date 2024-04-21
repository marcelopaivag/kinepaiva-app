import React from 'react';

const Map = ({ location }) => {
  // Replace with your actual location coordinates
  const defaultLocation = {
    lat: -33.37246415684867,
    lng: -70.52582507111491,
  };

  const lat = location?.lat || defaultLocation.lat;
  const lng = location?.lng || defaultLocation.lng;

  const url = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d832.9880589768534!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf345f2c0785%3A0xd1e1e9acddabae01!2sKinesi%C3%B3logo%20Marcelo%20Paiva%20G%C3%B3mez!5e0!3m2!1sen!2scl!4v1713724632536!5m2!1sen!2scl`;

  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={url}
        title="Map"
        className="w-full h-[400px]" // Adjust height as needed
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
