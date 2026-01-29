document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // In a real application, you would send this data to a server.
    // For this example, we'll just log it to the console and show an alert.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('문의해주셔서 감사합니다. 빠른 시일 내에 연락드리겠습니다.');

    // Clear the form
    document.getElementById('contact-form').reset();
});
