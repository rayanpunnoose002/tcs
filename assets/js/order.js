document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const name = document.getElementById('name').value;
    const Contactdetails=document.getElementById('contact').value
    const message = document.getElementById('order').value;
    
    // WhatsApp number (include country code, no '+' sign)
    const whatsappNumber = '+919778481266'; // Replace with the desired number
    
    // Build the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello TCS Fruit and Vegetables,\nI have a new order for you;\nHere are my details:\n\nCompany Name: ${name}\nContact Details: ${Contactdetails}\n\nOrders:\n${message}`)}`
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
});