# Google Sheets Integration Setup Guide

## Step 1: Prepare Your Google Sheet

1. Open your Google Sheets document: https://docs.google.com/spreadsheets/d/1wwMQtOpH9hv8jfK6fZqsrnzI_AGQV7V908LiyBXfVbk/edit?gid=0#gid=0
2. Make sure you have edit access to this sheet
3. The script will automatically create headers when the first form is submitted

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the code from `google-apps-script.js` file
4. Save the project (Ctrl+S or Cmd+S)
5. Give your project a name (e.g., "Form Handler")

## Step 3: Deploy as Web App

1. Click **Deploy > New Deployment**
2. Click the gear icon next to "Type" and select **Web app**
3. Set the following configuration:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Important**: Copy the Web App URL that appears
6. Click **Done**

## Step 4: Update Your Website Code

1. Open `src/utils/formHandler.js`
2. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web App URL you copied
3. Save the file

## Step 5: Test the Integration

1. Go to your website's contact form
2. Fill out and submit the form
3. Check your Google Sheet - you should see the data appear

## Expected Sheet Structure

The script will automatically create these columns:
- **Timestamp**: When the form was submitted
- **Name**: User's name
- **Phone**: User's phone number
- **Email**: User's email address
- **Message**: User's message
- **Source**: Which page the form was submitted from (Contact Page or Service Page)

## Troubleshooting

### If forms aren't working:
1. Check that the Web App URL is correctly set in `formHandler.js`
2. Make sure the Google Apps Script deployment has "Anyone" access
3. Check the browser console for any error messages
4. Try running the `testFormSubmission()` function in Apps Script editor

### If you get permission errors:
1. Make sure you have edit access to the Google Sheet
2. Re-deploy the web app with correct permissions
3. Try authorizing the script by running it once in the Apps Script editor

### Testing the Apps Script:
1. In the Apps Script editor, select the `testFormSubmission` function
2. Click the Run button
3. Check your sheet for a test entry

## Security Notes

- The web app is set to "Anyone" access, which is required for your website to submit data
- Only POST requests with valid JSON data will be processed
- Consider adding additional validation in the Apps Script if needed

## Form Data Flow

1. User fills out form on website
2. Form data is validated on the frontend
3. Data is sent to Google Apps Script web app
4. Apps Script adds the data to your Google Sheet
5. User sees success/error message

Your forms are now connected to Google Sheets!