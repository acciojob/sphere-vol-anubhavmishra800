function volume_sphere() {
    //Write your code here
  const radiusInput = document.getElementById("radius");
            const radius = parseFloat(radiusInput.value);

            // calculate the volume of the sphere
            const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

            // display the volume in the volume field
            const volumeField = document.getElementById("volume");
            volumeField.value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
