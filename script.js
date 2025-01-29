
const getLocationButton = document.getElementById('getLocation');
const output = document.getElementById('output');
const map = document.getElementById('map');
const weatherDiv = document.getElementById('weather');

getLocationButton.addEventListener('click', () => {
    output.textContent = 'Fetching your location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            output.innerHTML = `Latitude: ${latitude.toFixed(6)}<br>Longitude: ${longitude.toFixed(6)}`;
            map.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
            map.style.display = 'block';

           
        }, (error) => {
            output.innerHTML = `Error: ${error.message}`;
            map.style.display = 'none';
            weatherDiv.textContent = '';
        });
    } else {
        output.textContent = 'Geolocation is not supported by your browser.';
    }
});
