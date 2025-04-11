import React, { useState, useEffect } from 'react';

const LocationSearch = ({placeholder}) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length < 3) {
                setSuggestions([]);
                return;
            }

          if(!selected ) {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`,
                    {
                        headers: {
                            'Accept-Language': 'en',
                        },
                    }
                );

                const data = await response.json();
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching location suggestions:', error);
            }
          }
        };

        const delayDebounce = setTimeout(() => {
            fetchSuggestions();
        }, 400); 
        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <div className="w-full max-w-md mx-auto ">
            <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder={placeholder}
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setSelected(false)
                }

                }
            />
            {suggestions.length > 0 && (
                <ul className="border rounded mt-1 max-h-60 overflow-y-auto bg-white shadow">
                    {suggestions.map((place) => (
                        <li
                            key={place.place_id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setQuery(place.display_name);
                                setSuggestions([]);
                                setSelected(true) 
                              }}
                        >
                            {place.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationSearch;
