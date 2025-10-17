## Christmas Advent Calendar

A simple, festive Advent calendar built with vanilla HTML, CSS, and JavaScript. It renders 24 interactive “doors.” Clicking a door reveals a Christmas-themed image with a 3D flip animation. Doors only open for the current (or past) day in December, based on the user’s local time.

### Features
- **Interactive doors**: Flip to reveal an image behind each day.
- **Date gating**: Only opens in December for current/past days.
- **No build step**: Pure HTML/CSS/JS — just open and go.
- **Responsive layout**: Grid adapts to available width.
- **Easily customizable**: Change images, number of doors, and styling.

### Quick start
- **Option A (open directly)**: Double‑click `index.html` to open in your browser.
- **Option B (serve locally)**:
```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000

# or with Node.js (requires npm 5.2+)
npx serve .
```

### How it works
- **Structure**: `index.html` contains a container for the calendar grid.
- **Behavior**: `script.js` generates 24 doors on load. Each door has a front (number) and back (image). Clicking toggles the `open` class.
- **Animation**: `styles.css` uses 3D transforms to “flip” the door front, revealing the back.
- **Date logic**: The click handler checks the current month/day and only opens doors when allowed (December and not in the future).

### File structure
```text
.
├── index.html
├── script.js
└── styles.css
```

### Customization
- **Change number of doors**: In `script.js`, update the door count and ensure the images array has the same length.
```js
// script.js
const numberOfDoors = 24; // change this value as needed
```

- **Use your own images**: Replace the `images` array in `script.js` with your URLs or local paths. Square images (1:1) work best.
```js
// script.js
const images = [
  './images/01.jpg',
  './images/02.jpg',
  // ... one per door
];
```

- **Relax/disable date gating (for demos/testing)**: Replace the guarded logic in the click handler with an unconditional toggle.
```js
// inside the click handler
// door.classList.toggle('open'); // simply open on click, anytime
```

- **Adjust layout**: Tweak the grid in `styles.css`.
```css
/* styles.css */
.calendar-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* change number of columns */
  gap: 15px;
}
```

### Accessibility notes
- **Alt text**: Images include `alt` text (e.g., "Day 12"). If you provide custom images, set meaningful `alt` values.
- **Keyboard support**: Consider adding `tabindex="0"` to doors and a key handler for Enter/Space to improve accessibility.

### Deployment
- **GitHub Pages**: Push this folder to a GitHub repo, then enable Pages (Settings → Pages → Deploy from branch → root). The site will be available at your Pages URL.
- **Any static host**: Works on Netlify, Vercel, S3/CloudFront, etc. — it’s a static site.

### Notes
- **Images**: The default images are sourced via `source.unsplash.com` with Christmas-themed queries; they may change over time.
- **Time source**: Date gating uses the viewer’s local time (not a server clock).

### Tech stack
- **HTML** for structure
- **CSS** for layout/animation
- **JavaScript** for DOM generation and date gating

### License
No license is provided in this repository. If you plan to share or open‑source this, add a `LICENSE` file (for example, MIT).
