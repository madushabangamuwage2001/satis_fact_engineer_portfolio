import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_48u6hfz', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_pw0kcp9', // Replace with your EmailJS template ID
  PUBLIC_KEY: '2e5lVTadOV0SxAUiZ', // Replace with your EmailJS public key
};

/**
 * Initialize EmailJS with your public key
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

/**
 * Send email using EmailJS
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.phone - Sender's phone (optional)
 * @param {string} formData.message - The message content
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmail = async (formData) => {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      to_name: 'Satis-Fact Engineering Team',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Message sent successfully!',
      data: response
    };

  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Handle specific EmailJS errors
    let errorMessage = 'Failed to send message. Please try again.';
    
    if (error.status === 400) {
      errorMessage = 'Invalid request. Please check your information and try again.';
    } else if (error.status === 403) {
      errorMessage = 'Service unavailable. Please try again later.';
    } else if (error.status === 404) {
      errorMessage = 'Service not found. Please contact support.';
    } else if (error.text) {
      errorMessage = error.text;
    }

    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
};