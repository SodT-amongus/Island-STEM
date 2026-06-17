export const geocodeAddress = async (address) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
      {
        headers: {
          "Accept-Language": "en",
          "User-Agent": "IslandCitySTEM/1.0",
        },
      },
    );
    const data = await res.json();
    if (!data || data.length === 0) return null;
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
      displayName: data[0].display_name,
    };
  } catch (err) {
    console.error("Geocoding failed:", err);
    return null;
  }
};

export const reverseGeocode = async (lat, lng) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      {
        headers: {
          "Accept-Language": "en",
          "User-Agent": "IslandCitySTEM/1.0",
        },
      },
    );
    const data = await res.json();
    return data.display_name || null;
  } catch {
    return null;
  }
};
