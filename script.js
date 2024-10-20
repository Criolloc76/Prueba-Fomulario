document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbyO9PHMXsdIRLlK4XnF1oWRfuoQa4G6ysPflI6IodutOTyNuG4xfXNph6KVvejKoH8sag/exec', {  // URL de tu script de Google Apps
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
        this.reset();
    })
    .catch(error => console.error('Error:', error));
});
