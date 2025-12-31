# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for all forms in the furniture website.

## Prerequisites

- A Google account
- Access to Google Sheets
- Access to Google Apps Script

## Step-by-Step Setup

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Furniture Website Forms" (or any name you prefer)
4. Create the following tabs/sheets:
   - **Contact** - For contact form submissions
   - **SignIn** - For sign-in records
   - **SignUp** - For sign-up records
   - **Quote** - For quote requests
   - **Request** - For general requests
   - **Delivery** - For delivery information
   - **Order** - For order data

### 2. Set Up Headers in Each Sheet

Add the following headers in **Row 1** of each sheet:

#### Contact Sheet
```
Timestamp | Name | Email | Phone | Message
```

#### SignIn Sheet
```
Timestamp | Email
```

#### SignUp Sheet
```
Timestamp | Name | Email | Phone
```

#### Quote Sheet
```
Timestamp | Name | Email | Phone | Product | Quantity | Budget | Message
```

#### Request Sheet
```
Timestamp | Name | Email | Phone | RequestType | Message
```

#### Delivery Sheet
```
Timestamp | OrderId | Name | Email | Phone | Address | City | ZipCode | Country | DeliveryDate | TimeSlot | DeliveryMethod
```

#### Order Sheet
```
Timestamp | OrderId | Items | Subtotal | Discount | Shipping | Total | CustomerName | CustomerEmail | CustomerPhone | Address | PaymentStatus
```

### 3. Get Your Spreadsheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. Copy the `SPREADSHEET_ID` (the long string between `/d/` and `/edit`)

### 4. Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy the entire code from `GOOGLE_APPS_SCRIPT_CODE.gs` file
5. Paste it into the script editor
6. Replace `YOUR_SPREADSHEET_ID` on line 18 with your actual Spreadsheet ID
7. Save the project (Ctrl+S or Cmd+S)
8. Name it "Furniture Website Forms Handler"

### 5. Deploy as Web App

1. Click on "Deploy" > "New deployment"
2. Click the gear icon (⚙️) next to "Select type"
3. Choose "Web app"
4. Fill in the deployment settings:
   - **Description**: "Furniture Website Forms API"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. **IMPORTANT**: Authorize the script when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" > "Go to [Project Name] (unsafe)"
   - Click "Allow"
7. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

### 6. Configure Your React App

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following line:
   ```
   VITE_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
   ```
3. Replace `YOUR_WEB_APP_URL_HERE` with the Web App URL you copied in step 5
4. Save the file
5. Restart your development server:
   ```bash
   npm run dev
   ```

### 7. Test the Integration

1. Fill out the contact form on your website
2. Submit it
3. Check your Google Sheet - you should see the data appear in the Contact sheet
4. Test other forms (Sign In, Sign Up, Quote Request, etc.)

## Troubleshooting

### Data not appearing in Google Sheets?

1. **Check the Spreadsheet ID**: Make sure you've replaced `YOUR_SPREADSHEET_ID` correctly
2. **Check sheet names**: Ensure sheet names match exactly (case-sensitive)
3. **Check headers**: Make sure headers are in Row 1
4. **Check permissions**: Ensure the Web App is deployed with "Anyone" access
5. **Check browser console**: Look for any error messages

### CORS Errors?

- The script uses `no-cors` mode, which is normal
- Data will still be saved even if you see CORS warnings
- Check your Google Sheet to verify data is being saved

### Script Execution Errors?

1. Go to Apps Script editor
2. Check "Executions" tab for error logs
3. Make sure all sheet names exist in your spreadsheet
4. Verify the Spreadsheet ID is correct

## Form Types

The integration supports these form types:

- **contact** - Contact form submissions
- **signin** - User sign-in records
- **signup** - User registration
- **quote** - Quote requests
- **request** - General requests
- **delivery** - Delivery information
- **order** - Order data

## Security Notes

- The Web App URL is public, but only authorized users can modify the script
- Consider adding rate limiting or authentication if needed
- Regularly review the data in your Google Sheets
- Keep your Spreadsheet ID private

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check Apps Script execution logs
3. Verify all setup steps were completed correctly
4. Ensure your Google account has proper permissions

## Additional Features

You can extend the script to:
- Send email notifications when forms are submitted
- Add data validation
- Create automated responses
- Generate reports
- Integrate with other Google services

