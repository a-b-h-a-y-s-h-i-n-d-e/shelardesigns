function redirectToWhatsApp(button) {
    console.log("hello")
    const productCard = button.parentElement; 
    const img = productCard.querySelector('img'); 
    const title = productCard.querySelector('h4'); 

    if (!img || !title) {
        console.error("Product image or title not found");
        return; 
    }

    const imageSrc = img.src; 
    const productTitle = title.innerText;

    const encodedMessage = encodeURIComponent(
        `Hello, I'm interested in purchasing the following product:\n\n` +
        `Product: ${productTitle}\n` +
        `Image: ${imageSrc}\n\n` +
        `Please let me know more details.`
    );

    const whatsappURL = `https://wa.me/918454954438?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}