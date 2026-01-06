// Google Sheets Integration Utility
// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbytlbkvWBmwQscUYKhl-xA4N-RNOrqXu56W0ZSoaturSx4Uu5m6t1nPsUvblPtxVXpk/exec';

/**
 * Submit form data to Google Sheets via Apps Script
 * @param {string} formType - Type of form (contact, signin, signup, quote, request, delivery)
 * @param {Object} formData - Form data to submit
 * @returns {Promise<Object>} Response from Google Sheets
 */
export const submitToGoogleSheets = async (formType, formData) => {
  try {
    const payload = {
      formType: formType,
      timestamp: new Date().toISOString(),
      ...formData,
    };

    console.log('Submitting to Google Sheets:', { formType, payload }); // Debug log

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // With no-cors mode, we can't read the response
    // But the data will be saved to Google Sheets
    console.log('Form submitted (no-cors mode)'); // Debug log

    return {
      success: true,
      message: 'Form submitted successfully',
    };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
      error: error.message,
    };
  }
};

/**
 * Submit contact form
 */
export const submitContactForm = async (data) => {
  return submitToGoogleSheets('contact', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
  });
};

/**
 * Submit newsletter form - FIXED VERSION
 */
export const submitNewsletterForm = async (data) => {
  // Handle both string and object inputs
  let email;

  if (typeof data === 'string') {
    email = data.trim();
  } else if (data && typeof data === 'object') {
    email = (data.email || '').trim();
  } else {
    email = '';
  }

  console.log('Newsletter submission - Email:', email); // Debug log

  if (!email) {
    console.error('Newsletter submission failed: No email provided');
    return {
      success: false,
      message: 'Email is required'
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error('Newsletter submission failed: Invalid email format');
    return {
      success: false,
      message: 'Please enter a valid email address'
    };
  }

  return submitToGoogleSheets('newsletter', {
    email: email,
  });
};

/**
 * Submit sign in form
 */
export const submitSignIn = async (data) => {
  return submitToGoogleSheets('signin', {
    email: data.email,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Submit sign up form
 */
export const submitSignUp = async (data) => {
  return submitToGoogleSheets('signup', {
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Submit quote request form
 */
export const submitQuoteRequest = async (data) => {
  return submitToGoogleSheets('quote', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    product: data.product || '',
    quantity: data.quantity || '',
    message: data.message || '',
    budget: data.budget || '',
  });
};

/**
 * Submit general request form
 */
export const submitRequest = async (data) => {
  return submitToGoogleSheets('request', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    requestType: data.requestType || '',
    message: data.message,
  });
};

/**
 * Submit delivery form
 */
export const submitDeliveryForm = async (data) => {
  return submitToGoogleSheets('delivery', {
    orderId: data.orderId || '',
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    city: data.city,
    zipCode: data.zipCode,
    country: data.country,
    deliveryDate: data.deliveryDate || '',
    timeSlot: data.timeSlot || '',
    deliveryMethod: data.deliveryMethod || 'delivery',
  });
};

/**
 * Submit order data
 */
export const submitOrder = async (orderData) => {
  return submitToGoogleSheets('order', {
    orderId: orderData.orderId || `ORD-${Date.now()}`,
    items: JSON.stringify(orderData.items || []),
    subtotal: orderData.subtotal || 0,
    discount: orderData.discount || 0,
    shipping: orderData.shipping || 0,
    total: orderData.total || 0,
    customerName: orderData.customerName || '',
    customerEmail: orderData.customerEmail || '',
    customerPhone: orderData.customerPhone || '',
    address: orderData.address || '',
    paymentStatus: orderData.paymentStatus || 'pending',
    deliveryMethod: orderData.deliveryMethod || 'delivery',
    deliveryDate: orderData.deliveryDate || '',
    timeSlot: orderData.timeSlot || '',
  });
};

/**
 * Fetch user data from Google Sheets
 * @param {string} email - User email to fetch data for
 * @returns {Promise<Object>} User data from Google Sheets
 */
export const fetchUserData = async (email) => {
  try {
    // Use a different approach since no-cors doesn't allow reading responses
    // We'll use a workaround with a callback or try with cors
    const scriptUrl = GOOGLE_SCRIPT_URL.replace('/exec', '');
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getUser&email=${encodeURIComponent(email)}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return {
          success: true,
          userData: data,
        };
      }
    }

    // If fetch fails, return failure (will fallback to localStorage)
    return {
      success: false,
      message: 'Failed to fetch user data',
    };
  } catch (error) {
    console.error('Error fetching user data from Google Sheets:', error);
    // Return failure but don't throw - will use localStorage fallback
    return {
      success: false,
      message: 'Failed to fetch user data',
      error: error.message,
    };
  }
};

/**
 * Update user profile in Google Sheets
 * @param {Object} userData - Updated user data
 * @returns {Promise<Object>} Response from Google Sheets
 */
export const updateUserProfile = async (userData) => {
  return submitToGoogleSheets('updateProfile', {
    email: userData.email,
    name: userData.name,
    phone: userData.phone || '',
  });
};

/**
 * Get user orders from Google Sheets
 * @param {string} email - User email
 * @returns {Promise<Object>} User orders
 */
export const fetchUserOrders = async (email) => {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getOrders&email=${encodeURIComponent(email)}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return {
          success: true,
          orders: data.orders || [],
        };
      }
    }

    return {
      success: false,
      orders: [],
      message: 'Failed to fetch orders',
    };
  } catch (error) {
    console.error('Error fetching orders from Google Sheets:', error);
    return {
      success: false,
      orders: [],
      error: error.message,
    };
  }
};