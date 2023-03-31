import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

    // const path = require('path');
    // const google = require('@googleapis/forms');
    // const {authenticate} = require('@google-cloud/local-auth');

    // const formID = '<YOUR_FORM_ID>';

    // async function runSample(query) {
    //   const auth = await authenticate({
    //     keyfilePath: path.join(__dirname, 'credentials.json'),
    //     scopes: 'https://www.googleapis.com/auth/forms.body.readonly',
    //   });
    //   const forms = google.forms({
    //     version: 'v1',
    //     auth: auth,
    //   });
    //   const res = await forms.forms.get({formId: formID});
    //   console.log(res.data);
    //   return res.data;
    // }

    // if (module === require.main) {
    //   runSample().catch(console.error);
    // }
    // module.exports = runSample;


  return (
    <>hello</>
  )
  }
export default App
