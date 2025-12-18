document.getElementById('mail-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = 'akademiaaxios@gmail.com';
    const name = document.getElementById('name');
    const message = document.getElementById('messagge');

    window.location.href = `mailto:${email}?subject=Contacto%20de%20${encodeURIComponent(name.value)}&body=${encodeURIComponent(message.value)}`;
    
    name.value = '';
    message.value = '';
})