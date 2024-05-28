// popup.js

document.getElementById("replace-button").addEventListener("click", () => {
  const imageUrl = document.getElementById("image-url").value;
  // Send a message to the background script
  if (imageUrl) {
    chrome.runtime.sendMessage({ action: "replaceImages", imageUrl: imageUrl });
  }else{
    alert("Please enter a valid image URL");
  }
});
