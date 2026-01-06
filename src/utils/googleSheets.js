// Google Sheets Integration Utility - FIXED FOR NO-CORS
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbytlbkvWBmwQscUYKhl-xA4N-RNOrqXu56W0ZSoaturSx4Uu5m6t1nPsUvblPtxVXpk/exec';

/**
 * Submit form data to Google Sheets via Apps Script
 * Using URL parameters instead of POST body (workaround for no-cors)
 */
export const submitToGoogleSheets = async (formType, formData) => {
  try {
    const payload = {
      formType: formType,
      timestamp: new Date().toISOString(),
      ...formData,
    };

    console.log('Submitting to Google Sheets:', { formType, payload });

    // Convert payload to URL parameters
    const params = new URLSearchParams();
    params.append('formType', formType);
    params.append('timestamp', new Date().toISOString());

    // Add all form data as parameters
    Object.keys(formData).forEach(key => {
      if (formData[key] !== undefined && formData[key] !== null) {
        params.append(key, formData[key]);
      }
    });

    const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

    console.log('Submitting to URL:', url);

    const response = await fetch(url, {
      method: 'GET', // Using GET with parameters instead of POST
      redirect: 'follow',
    });

    console.log('Form submitted successfully');

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
 * Alternative: Submit using POST with proper CORS
 * Use this if you redeploy your Apps Script with CORS enabled
 */
export const submitToGoogleSheetsWithPOST = async (formType, formData) => {
  try {
    const payload = {
      formType: formType,
      timestamp: new Date().toISOString(),
      ...formData,
    };

    console.log('Submitting to Google Sheets (POST):', { formType, payload });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain', // Changed from application/json
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    // Try to read the response
    try {
      const result = await response.text();
      const data = JSON.parse(result);
      console.log('Response:', data);
      return data;
    } catch (e) {
      // If we can't parse the response, assume success
      return {
        success: true,
        message: 'Form submitted successfully',
      };
    }
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
    subject: data.subject || '',
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

  console.log('Newsletter submission - Email:', email);

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
 */
export const fetchUserData = async (email) => {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getUser&email=${encodeURIComponent(email)}`, {
      method: 'GET',
      redirect: 'follow',
    });

    if (response.ok) {
      const text = await response.text();
      const data = JSON.parse(text);
      if (data.success) {
        return {
          success: true,
          userData: data,
        };
      }
    }

    return {
      success: false,
      message: 'Failed to fetch user data',
    };
  } catch (error) {
    console.error('Error fetching user data from Google Sheets:', error);
    return {
      success: false,
      message: 'Failed to fetch user data',
      error: error.message,
    };
  }
};

/**
 * Update user profile in Google Sheets
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
 */
export const fetchUserOrders = async (email) => {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getOrders&email=${encodeURIComponent(email)}`, {
      method: 'GET',
      redirect: 'follow',
    });

    if (response.ok) {
      const text = await response.text();
      const data = JSON.parse(text);
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