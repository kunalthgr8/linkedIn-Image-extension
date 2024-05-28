chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const newImageUrl = request.imageUrl;

  // Select all profile pictures on the page
  const profilePics = document.querySelectorAll("img");

  profilePics.forEach((pic) => {
    // Replace the src attribute of each image with the new image URL
    if (pic.width < 70) {
      pic.src = newImageUrl;
    }
  });
});
