# Google Sheets 403 Error - Troubleshooting Guide

## The 403 Error Issue

You're getting a 403 error because the Google Apps Script doesn't have proper permissions. Here's how to fix it:

## Step-by-Step Fix:

### 1. Re-deploy the Google Apps Script

1. Go to your Google Apps Script: https://script.google.com/
2. Open your project (or create a new one)
3. Replace ALL the code with the updated code from `google-apps-script.js`
4. **Save the project** (Ctrl+S)

### 2. Test the Script First

1. In the Apps Script editor, select the `testFormSubmission` function from the dropdown
2. Click the **Run** button
3. **IMPORTANT**: You'll be asked to authorize the script - click "Review Permissions"
4. Click "Advanced" → "Go to [Your Project Name] (unsafe)"
5. Click "Allow"
6. Check your Google Sheet - you should see a test row added

### 3. Re-deploy as Web App

1. Click **Deploy** → **New Deployment**
2. Click the gear icon and select **Web app**
3. Set configuration:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the new Web App URL**

### 4. Update Your Website

Replace the URL in `src/utils/formHandler.js` with the new Web App URL.

## Alternative Solution: Create New Apps Script

If the above doesn't work, create a completely new Apps Script:

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete any existing code
4. Paste the code from `google-apps-script.js`
5. Save and deploy as above

## Test the Integration

1. Visit your website's contact form
2. Fill out and submit the form
3. Check your Google Sheet immediately
4. If it works, you'll see the data appear

## Common Issues & Solutions:

### Issue: Still getting 403 error
**Solution**: Make sure you authorized the script by running the test function first

### Issue: Script runs but no data appears
**Solution**: Check that the script is bound to the correct Google Sheet

### Issue: "Script not found" error
**Solution**: Make sure the Web App URL is correct and the deployment is active

### Issue: Data appears but formatting is wrong
**Solution**: The script will auto-format headers on first submission

## Verification Steps:

1. ✅ Script authorized (run test function)
2. ✅ Test data appears in sheet
3. ✅ Web app deployed with "Anyone" access
4. ✅ Correct URL in formHandler.js
5. ✅ Form submission works from website

## Need Help?

If you're still having issues:
1. Check the Apps Script execution log for errors
2. Try the test function again
3. Make sure your Google Sheet is not restricted
4. Verify the Web App URL is exactly correct

The 403 error should be resolved once you properly authorize the script!