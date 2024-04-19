import React from 'react';

const Map = ({ location }) => {
  // Replace with your actual location coordinates
  const defaultLocation = {
    lat: -33.37246415684867,
    lng: -70.52582507111491,
  };

  const lat = location?.lat || defaultLocation.lat;
  const lng = location?.lng || defaultLocation.lng;

  const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13327.78578339986!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cbfa892465e3%3A0xba14c62880cae41d!2sYour+Business+Name!5e0!3m2!1sen!2scl!4v1709427938613!5m2!1sen!2scl`;

  return (
    <div className="w-full rounded-lg overflow-hidden">
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