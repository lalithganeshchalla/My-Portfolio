
const sendToWhatsApp = (formData) => {
  const phoneNumber = "919515394859"; // 👈 Replace 91 with your country code
  const message = `Hello, my name is ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
export default sendToWhatsApp;