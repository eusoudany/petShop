

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário de contato enviado com sucesso!');
        contactForm.reset();
    });

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Obrigado por assinar nossa newsletter!');
        newsletterForm.reset();
    });
});
