/**
 * Google Apps Script for Furniture Website Forms
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Create a Google Sheet with the following tabs:
 *    - Contact, SignIn, SignUp, Quote, Request, Delivery, Order, Newsletter, ForgotPassword
 * 5. In each tab, add headers in row 1:
 *    - Contact: Timestamp, Name, Email, Phone, Message
 *    - SignIn: Timestamp, Email, Password
 *    - SignUp: Timestamp, Name, Email, Phone, Password
 *    - Quote: Timestamp, Name, Email, Phone, Product, Quantity, Budget, Message
 *    - Request: Timestamp, Name, Email, Phone, RequestType, Message
 *    - Delivery: Timestamp, OrderId, Name, Email, Phone, Address, City, ZipCode, Country, DeliveryDate, TimeSlot, DeliveryMethod
 *    - Order: Timestamp, OrderId, Items, Subtotal, Discount, Shipping, Total, CustomerName, CustomerEmail, CustomerPhone, Address, PaymentStatus
 *    - Newsletter: Timestamp, Email
 *    - ForgotPassword: Timestamp, Email, RequestTimestamp
 * 
 * NOTE: The script now supports GET requests for fetching user data and orders:
 *    - GET ?action=getUser&email=user@example.com - Fetches user profile from SignUp sheet
 *    - GET ?action=getOrders&email=user@example.com - Fetches user orders from Order sheet
 *    - POST with formType='updateProfile' - Updates user profile in SignUp sheet
 * 6. Replace 'YOUR_SPREADSHEET_ID' with your actual Google Sheet ID
 * 7. Deploy as Web App:
 *    - Click Deploy > New Deployment
 *    - Choose Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 * 8. Copy the Web App URL and use it in your React app's .env file as VITE_GOOGLE_SCRIPT_URL
 */

// Replace with your Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// Sheet names
const SHEETS = {
  CONTACT: 'Contact',
  SIGNIN: 'SignIn',
  SIGNUP: 'SignUp',
  QUOTE: 'Quote',
  REQUEST: 'Request',
  DELIVERY: 'Delivery',
  ORDER: 'Order',
  NEWSLETTER: 'Newsletter',
  FORGOTPASSWORD: 'ForgotPassword'
};

/**
 * Main doPost function - handles all form submissions
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    let result;
    
    switch(formType) {
      case 'contact':
        result = saveContactForm(data);
        break;
      case 'signin':
        result = saveSignIn(data);
        break;
      case 'signup':
        result = saveSignUp(data);
        break;
      case 'quote':
        result = saveQuoteRequest(data);
        break;
      case 'request':
        result = saveRequest(data);
        break;
      case 'delivery':
        result = saveDeliveryForm(data);
        break;
      case 'order':
        result = saveOrder(data);
        break;
      case 'updateProfile':
        result = updateUserProfile(data);
        break;
      case 'newsletter':
        result = saveNewsletter(data);
        break;
      case 'forgotPassword':
        result = saveForgotPassword(data);
        break;
      default:
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: 'Invalid form type'
        })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Main doGet function - handles GET requests for fetching data
 */
function doGet(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'getUser') {
      const email = e.parameter.email;
      return ContentService.createTextOutput(JSON.stringify(getUserData(email)))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === 'getOrders') {
      const email = e.parameter.email;
      return ContentService.createTextOutput(JSON.stringify(getUserOrders(email)))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Invalid action'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Save Contact Form Data
 */
function saveContactForm(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.CONTACT);
  if (!sheet) {
    return { success: false, message: 'Contact sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.message || ''
  ]);
  
  return { success: true, message: 'Contact form submitted successfully' };
}

/**
 * Save Sign In Data
 */
function saveSignIn(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.SIGNIN);
  if (!sheet) {
    return { success: false, message: 'SignIn sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.email || ''
  ]);
  
  return { success: true, message: 'Sign in recorded' };
}

/**
 * Save Sign Up Data
 */
function saveSignUp(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.SIGNUP);
  if (!sheet) {
    return { success: false, message: 'SignUp sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.phone || ''
  ]);
  
  return { success: true, message: 'Sign up successful' };
}

/**
 * Save Quote Request
 */
function saveQuoteRequest(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.QUOTE);
  if (!sheet) {
    return { success: false, message: 'Quote sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.product || '',
    data.quantity || '',
    data.budget || '',
    data.message || ''
  ]);
  
  return { success: true, message: 'Quote request submitted successfully' };
}

/**
 * Save General Request
 */
function saveRequest(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.REQUEST);
  if (!sheet) {
    return { success: false, message: 'Request sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.requestType || '',
    data.message || ''
  ]);
  
  return { success: true, message: 'Request submitted successfully' };
}

/**
 * Save Delivery Form
 */
function saveDeliveryForm(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.DELIVERY);
  if (!sheet) {
    return { success: false, message: 'Delivery sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.orderId || '',
    data.name || '',
    data.email || '',
    data.phone || '',
    data.address || '',
    data.city || '',
    data.zipCode || '',
    data.country || '',
    data.deliveryDate || '',
    data.timeSlot || '',
    data.deliveryMethod || 'delivery'
  ]);
  
  return { success: true, message: 'Delivery information saved' };
}

/**
 * Save Order Data
 */
function saveOrder(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.ORDER);
  if (!sheet) {
    return { success: false, message: 'Order sheet not found' };
  }
  
  sheet.appendRow([
    new Date(),
    data.orderId || '',
    data.items || '',
    data.subtotal || 0,
    data.discount || 0,
    data.shipping || 0,
    data.total || 0,
    data.customerName || '',
    data.customerEmail || '',
    data.customerPhone || '',
    data.address || '',
    data.paymentStatus || 'pending'
  ]);
  
  return { success: true, message: 'Order saved successfully', orderId: data.orderId };
}

/**
 * Get user data from SignUp sheet
 */
function getUserData(email) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.SIGNUP);
    if (!sheet) {
      return { success: false, message: 'SignUp sheet not found' };
    }
    
    const data = sheet.getDataRange().getValues();
    // Skip header row
    for (let i = 1; i < data.length; i++) {
      if (data[i][2] === email) { // Email is in column 3 (index 2)
        return {
          success: true,
          name: data[i][1] || '',
          email: data[i][2] || '',
          phone: data[i][3] || '',
          signupDate: data[i][0] ? new Date(data[i][0]).toLocaleDateString() : ''
        };
      }
    }
    
    return { success: false, message: 'User not found' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Get user orders from Order sheet
 */
function getUserOrders(email) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.ORDER);
    if (!sheet) {
      return { success: false, orders: [], message: 'Order sheet not found' };
    }
    
    const data = sheet.getDataRange().getValues();
    const orders = [];
    
    // Skip header row
    for (let i = 1; i < data.length; i++) {
      if (data[i][8] === email) { // CustomerEmail is in column 9 (index 8)
        orders.push({
          orderId: data[i][1] || '',
          timestamp: data[i][0] ? new Date(data[i][0]).toLocaleDateString() : '',
          total: data[i][6] || 0,
          paymentStatus: data[i][11] || 'pending',
          items: data[i][2] || ''
        });
      }
    }
    
    return { success: true, orders: orders };
  } catch (error) {
    return { success: false, orders: [], message: error.toString() };
  }
}

/**
 * Update user profile in SignUp sheet
 */
function updateUserProfile(data) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.SIGNUP);
    if (!sheet) {
      return { success: false, message: 'SignUp sheet not found' };
    }
    
    const sheetData = sheet.getDataRange().getValues();
    
    // Find the row with matching email
    for (let i = 1; i < sheetData.length; i++) {
      if (sheetData[i][2] === data.email) { // Email is in column 3 (index 2)
        // Update the row
        sheet.getRange(i + 1, 2).setValue(data.name || sheetData[i][1]); // Name column
        sheet.getRange(i + 1, 4).setValue(data.phone || sheetData[i][3]); // Phone column
        return { success: true, message: 'Profile updated successfully' };
      }
    }
    
    return { success: false, message: 'User not found' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Save Newsletter Subscription
 */
function saveNewsletter(data) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.NEWSLETTER);
    if (!sheet) {
      return { success: false, message: 'Newsletter sheet not found' };
    }
    
    sheet.appendRow([
      new Date(),
      data.email || ''
    ]);
    
    return { success: true, message: 'Newsletter subscription saved successfully' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Save Forgot Password Request
 */
function saveForgotPassword(data) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEETS.FORGOTPASSWORD);
    if (!sheet) {
      return { success: false, message: 'ForgotPassword sheet not found' };
    }
    
    sheet.appendRow([
      new Date(),
      data.email || '',
      data.timestamp || new Date().toISOString()
    ]);
    
    return { success: true, message: 'Password reset request saved successfully' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Test function - can be run from the script editor
 */
function testContactForm() {
  const testData = {
    formType: 'contact',
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 1234567890',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

