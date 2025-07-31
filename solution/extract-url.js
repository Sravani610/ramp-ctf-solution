// Ramp CTF Challenge - URL Extraction Script
// This script extracts the hidden URL from the challenge HTML

let chars = [];
let sections = document.querySelectorAll('section[data-id^="92"]');

console.log(`Found ${sections.length} matching sections`);

sections.forEach(function(s) {
  let a = s.querySelector('article[data-class*="45"]');
  if(a) {
    let d = a.querySelector('div[data-tag*="78"]');
    if(d) {
      let b = d.querySelector('b.ref[value]');
      if(b) {
        chars.push(b.getAttribute('value'));
      }
    }
  }
});

let url = chars.join('');
console.log('Extracted URL:', url);

// Fetch the flag from the extracted URL
fetch(url).then(r => r.text()).then(flag => {
  console.log('FLAG FOUND:', flag.trim());
}).catch(error => {
  console.log('Error:', error);
});
