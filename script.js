

// countdown
// wedding date
let countDate = new Date('Apr 28, 2024 12:35:00').getTime();
// let audio = document.getElementById("myAudio");

function englishToDevanagari(number) {
  const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  if (number < 10) {
    return devanagariDigits[0] + devanagariDigits[number];
  } else {
    return number.toString().split('').map(digit => devanagariDigits[digit]).join('');
  }
}

//audio autoplay
window.onload = function() {
    let audio = new Audio('Gulabi Sadi Ani Lali Lal Lal.mp3')
    audio.volume = 0.8;
    audio.play();
    
  }

function clearCache() {
    // Clear the cache
    window.location.reload(true);
}


function countDown() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let w = Math.floor((gap % minute) / second);

  d = englishToDevanagari(d);
  h = englishToDevanagari(h);
  m = englishToDevanagari(m);
  w = englishToDevanagari(w);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = w;
}

setInterval(function () {
  countDown();
}, 1000);


document.addEventListener('DOMContentLoaded', function() {
  const downloadImage = document.getElementById('downloadImage');

  // Add click event listener to the image
  downloadImage.addEventListener('click', function() {
      // Create a link element
      const link = document.createElement('a');
      link.href = "IMG-20240408-WA0013.jpg";
      link.download = 'Amol-weds-Yamini.jpg'; // Set the filename for download

      // Simulate a click on the link to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});
