// Form submission handler for Google Sheets integration
export const submitToGoogleSheets = async (formData) => {
  // Your Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJnAkPhk-NoWO2z6ktK4jrcExS0fc3PgXBw_ioG3I-dnxEs1Ym8oRxZ7Zz1xAJeZqn/exec';
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: formData.source || 'Website' // Track which form was used
      })
    });

    // Note: With no-cors mode, we can't read the response
    // but the request will still be sent to Google Sheets
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error: error.message };
  }
};

// Form validation helper
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.phone || formData.phone.trim().length < 10) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};