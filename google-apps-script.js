/**
 * Google Apps Script for handling form submissions to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheets document
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Save the project
 * 5. Deploy as web app (Deploy > New Deployment)
 * 6. Set execute as "Me" and access to "Anyone"
 * 7. Copy the web app URL and update it in src/utils/formHandler.js
 * 
 * IMPORTANT: Make sure to authorize the script when prompted!
 */

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e);
    
    // Get the active spreadsheet (make sure this script is bound to your sheet)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    let data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log('Parsed data:', data);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Invalid JSON data'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Name', 'Phone', 'Email', 'Message', 'Source']
      ]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Add the new row with form data
    const newRow = [
      new Date(data.timestamp || new Date()),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.message || '',
      data.source || 'Website'
    ];
    
    sheet.appendRow(newRow);
    console.log('Row added successfully:', newRow);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 6);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('Form handler is working! POST data to submit forms.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Test function to verify the script works
 * Run this function in the Apps Script editor to test
 */
function testFormSubmission() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        phone: '1234567890',
        email: 'test@example.com',
        message: 'This is a test message from Apps Script',
        timestamp: new Date().toISOString(),
        source: 'Test Function'
      })
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
  return result.getContent();
}