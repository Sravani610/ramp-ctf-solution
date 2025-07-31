# Ramp CTF Challenge Solution

A complete solution to Ramp's frontend CTF (Capture The Flag) challenge, demonstrating DOM manipulation, pattern recognition, and React development skills.

## 🎯 Challenge Overview

The challenge involved:
1. **URL Extraction**: Finding hidden characters in HTML DOM elements following a specific pattern
2. **Flag Retrieval**: Making HTTP requests to decode the hidden URL and retrieve the flag
3. **React Implementation**: Building a typewriter effect component to display the flag

## 🔍 Solution Approach

### Step 1: DOM Pattern Recognition
The challenge required extracting characters from HTML elements matching this pattern:
```html
<section data-id="92*">
  <article data-class="*45">
    <div data-tag="*78*">
      <b class="ref" value="VALID_CHARACTER"></b>
    </div>
  </article>
</section>
```

### Step 2: URL Extraction Script
```javascript
let chars = [];
let sections = document.querySelectorAll('section[data-id^="92"]');
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
```

### Step 3: Flag Retrieval
```javascript
fetch(url).then(r => r.text()).then(flag => console.log('FLAG:', flag));
```

**Result**: `patient`

## ⚛️ React Implementation

Built a React component with:
- ✅ HTTP request using browser fetch API
- ✅ Loading state management
- ✅ Typewriter effect (500ms delay between characters)
- ✅ Flag displayed as individual list items
- ✅ Animation runs only once
- ✅ Uses only React APIs (no external libraries)

## 🚀 Live Demo

**CodeSandbox**: [https://codesandbox.io/p/sandbox/qdmmzk](https://codesandbox.io/p/sandbox/qdmmzk)

## 🛠️ Technologies Used

- **JavaScript/TypeScript**: DOM manipulation and async operations
- **React**: Component-based UI with hooks
- **HTML/CSS**: Styling and layout
- **Browser APIs**: Fetch for HTTP requests

## 📋 Challenge Requirements Met

- [x] Extract hidden URL from DOM pattern
- [x] Retrieve flag from extracted URL
- [x] Create React application with typewriter effect
- [x] Use browser APIs only (no external libraries)
- [x] Display each character as separate list item
- [x] 500ms delay between character reveals
- [x] Animation runs only once

## 🎯 Key Skills Demonstrated

- **Problem Solving**: Reverse engineering DOM patterns
- **JavaScript Proficiency**: Advanced DOM querying and async operations
- **React Development**: State management and useEffect hooks
- **Attention to Detail**: Following exact specifications
- **Debugging**: Working through console errors and API responses

## 📁 Files

- `solution/extract-url.js` - URL extraction script
- `solution/App.tsx` - React component with typewriter effect
- `challenge-files/challenge.html` - Original challenge HTML

---

**Final Answer**: `patient - https://codesandbox.io/p/sandbox/qdmmzk`
