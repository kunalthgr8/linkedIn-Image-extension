// popup.js

document.getElementById('replace-button').addEventListener('click', () => {
    const imageUrl = document.getElementById('image-url').value;
  
    // Send a message to the background script
    chrome.runtime.sendMessage({ action: "replaceImages", imageUrl: imageUrl });
  });
  