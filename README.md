# Watermarked.ai — website

Landing page for **Watermarked.ai**, a concept for protecting voices from AI misuse: it adds inaudible watermarks to audio so recordings are harder to use for training voice-cloning models, and helps detect AI-generated deepfakes.

## What's on the page

- **Hear the difference:** an A/B player comparing an original voice recording with an AI-cloned version (`public/`).
- **Why it matters:** a section on the growing deepfake threat.
- **How it works**, **features**, and tabbed **services** for individuals, API users and enterprises.
- **About** and a contact form.

## Stack

Plain HTML, CSS and JavaScript (`watermarked.html`, `watermarked.css`, `script.js`). No build step.

## Run it

Open `watermarked.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/watermarked.html
```
