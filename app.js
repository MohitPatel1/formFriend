// const { google } = require('googleapis');

// const service = google.sheets("v4");
// const credentials = require("./credential.json");

// // Configure auth client
// const authClient = new google.auth.JWT(
//     credentials.client_email,
//     null,
//     credentials.private_key.replace(/\\n/g, "\n"),
//     ["https://www.googleapis.com/auth/spreadsheets"]
// );

// (async function () {
//     try {

//         // Authorize the client
//         const token = await authClient.authorize();

//         // Set the client credentials
//         authClient.setCredentials(token);

//         // Get the rows
//         const res = await service.spreadsheets.values.get({
//             auth: authClient,
//             spreadsheetId: "1DFSfLkZYCdKd2C4DIoWlvPKCP2VDzXToN6e6n3kC-Zw",
//             range: "A:H",
//         });

//         // All of the answers
//         const answers = [];

//         // Set rows to equal the rows
//         const rows = res.data.values;

//         // Check if we have any data and if we do add it to our answers array
//         if (rows.length) {

//             // Remove the headers
//             rows.shift()

//             // For each row
//             for (const row of rows) {
//                 answers.push({ timeStamp: row[0], answer: row[1] });
//             }

//         } else {
//             console.log("No data found.");  
//         }

//         // Saved the answers
//         fs.writeFileSync("answers.json", JSON.stringify(answers), function (err, file) {
//             if (err) throw err;
//             console.log("Saved!");
//         });

//     } catch (error) {

//         // Log the error
//         console.log(error);

//         // Exit the process with error
//         process.exit(1);

//     }

// });


// Load the Google API Client Library for JavaScript
gapi.load('client', initClient);

// Initialize the API client library and set up sign-in state listeners
function initClient() {
  gapi.client.init({
    apiKey: '3b4ab6e3a22e09e4742238d5097731bca87fa2e2',
    clientId: 'http://127.0.0.1:5500',
    discoveryDocs: ['https://sheets.googleapis.com/1DFSfLkZYCdKd2C4DIoWlvPKCP2VDzXToN6e6n3kC-Zw/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
  }).then(function() {
    // Call the Sheets API
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1DFSfLkZYCdKd2C4DIoWlvPKCP2VDzXToN6e6n3kC-Zw',
      range: 'Sheet1!A:H'
    }).then(function(response) {
      var range = response.result;
      if (range.values.length > 0) {
        console.log(range.values);
      } else {
        console.log('No data found.');
      }
    }, function(response) {
      console.log('Error: ' + response.result.error.message);
    });
  });
}
