if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration => {
      console.log("SW Registered");
      console.log(registration);   
  }).catch(error => {
      console.log("SW not registered");
      console.log("error"); 
  });
}

// Function to switch the video URL in the current player instance
function playVideo(url) {
  const playPageUrl = `play.html?videoUrl=${encodeURIComponent(url)}`;
  player.switchURL(url);
}



let player;

$(function() {
  // Initialize the HlsJsPlayer with initial settings
  player = new HlsJsPlayer({
    id: "videoPlayer",
    url: 'https://alpha.ipnxnigeria.net/doc/natgeowild.m3u8',
    isLive: true,
    autoplay: true,
    volume: 0.8,
    width: 1024,
    pip: true,
    download: false,
    fitVideoSize: 'auto',
    lang: 'en',
  });
});








//root page


// function getQueryParams() {
//   const params = {};
//   window.location.search.substring(1).split("&").forEach(pair => {
//       const [key, value] = pair.split("=");
//       params[key] = decodeURIComponent(value);
//   });
//   return params;
// }

// // Initialize the player with the video URL from query parameters
// document.addEventListener("DOMContentLoaded", () => {
//   const params = getQueryParams();
//   const videoUrl = params.videoUrl;

//   if (videoUrl) {
//       const player = new Player({
//           id: 'videoPlayer',
//           url: videoUrl
//       });
//   }
// });






//watch page

// var player = new window.Player({
//   id: 'videoPlayer',
//     url: 'https://www.youtube.com/watch?v=WbbAPfDVqfY&t=269s',
//     isLive: true,
//     autoplay: true,
//     volume: 0.8,
//     width: 1024,
//     pip: true,
//     download: false,
//     fitVideoSize: 'auto',
//     lang: 'en',
// })





// https://alpha.ipnxnigeria.net/doc/cgtndocu.m3u8
//  https://alpha.ipnxnigeria.net/doc/natgeowild.m3u8
//  https://alpha.ipnxnigeria.net/news/africanews.m3u8
//  https://alpha.ipnxnigeria.net/news/aljazeera.m3u8
// Array of video URLs

// const videoUrls = [
//   'https://alpha.ipnxnigeria.net/doc/cgtndocu.m3u8', // Replace with actual video URLs
//   'https://alpha.ipnxnigeria.net/doc/natgeowild.m3u8',
//   'https://alpha.ipnxnigeria.net/news/africanews.m3u8',
//   'https://alpha.ipnxnigeria.net/news/aljazeera.m3u8',
//   '/assets/videos/video4.mp4'
// ];

// Function to play the selected video
// function playVideo(videoUrl) {
//   const videoPlayer = document.getElementById('VideoPlayer');
//   player.src = videoUrl;
//   player.play();
// }

// Function to generate video thumbnails
// function generateThumbnails() {
//   const videoList = document.getElementById('videoList');

//   // Clear existing thumbnails
//   videoList.innerHTML = '';

//   // Generate thumbnails for each video
//   videoUrls.forEach((url, index) => {
//       const thumbnailDiv = document.createElement('div');
//       thumbnailDiv.classList.add('thumbnail');
//       thumbnailDiv.setAttribute('onclick', `playVideo('${url}')`);

//       const thumbnailImg = document.createElement('img');
//       thumbnailImg.src = `/assets/thumnails/thumbnail${index + 1}.png`; // Replace with actual thumbnail URLs
//       thumbnailImg.alt = `Video ${index + 1}`;

//       const titlePara = document.createElement('p');
//       titlePara.textContent = `Video ${index + 1} Title`; // Replace with actual video titles

//       thumbnailDiv.appendChild(thumbnailImg);
//       thumbnailDiv.appendChild(titlePara);

//       videoList.appendChild(thumbnailDiv);
//   });
// }

// Call the function to generate thumbnails when the page loads
// window.onload = generateThumbnails;






