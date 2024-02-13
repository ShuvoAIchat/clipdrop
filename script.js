const promptInput = document.getElementById('prompt');
const sendButton = document.getElementById('send');
const responseDiv = document.getElementById('response');

// Replace {YOUR_API_KEY_HERE} with your actual API key from ClipDrop
const apiKey = 'Bearer {YOUR_API_KEY_HERE}';
const url = 'https://clipdrop-api.co/text-to-image/v1';

sendButton.addEventListener('click', () => {
  const prompt = promptInput.value;

  // Set up the prompt and other parameters
  const body = {
    prompt: prompt
  };

  // Configure and send the request
  const headers = {
    'Authorization': apiKey,
    'Content-Type': 'application/json'
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
    responseDiv.innerHTML = `<img src="${data.url}" alt="Generated Image" />`;
  })
  .catch(error => {
    responseDiv.innerHTML = `<p>Error: ${error.message
