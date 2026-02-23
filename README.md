# Salt Level — Fensea-style website

A single-page website inspired by the Fensea body care site: soft gradients, mint accent (#07B98A), and the same section structure.

## Structure

- **Hero** — Headline “Salt Level Activated”, badge, email signup, hero visual with “NEW!” sticker
- **Care** — “Choosing the right body care” with 3 crystal tabs and sliding content (Care crystal salt, Persian Blue, Himalayan Pink)
- **Bestsellers** — Parallax-style block with №1–3 (Body / Face / Hair scrub), center image, and founder cards; updates on scroll and when clicking left blocks
- **Video** — “Watch!” area with placeholder for a background video and short copy
- **Shop** — “Our care crystal salt” heading and Swiper product carousel (Hair bath, Sea peel, Sea mist)
- **Footer** — Logo, “Let’s talk”, newsletter form, sitemap, contacts, copyright

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080` (or the port shown).

## Tech

- **HTML5** — Semantic sections and ARIA where needed
- **CSS** — Custom properties, Grid/Flexbox, gradients, basic transitions
- **JS** — Vanilla: modal (open/close), care tabs, parallax index (scroll + click), Swiper for product carousel
- **Fonts** — Google Fonts: DM Serif Display, Outfit
- **Swiper** — v11 from CDN for the shop carousel

## Customize

- **Brand** — Replace “Salt Level” in the logo and copy in `index.html`
- **Colors** — Edit `:root` in `css/style.css` (e.g. `--color-mint`, `--color-bg`)
- **Content** — Swap placeholder text and add real images by replacing the `.hero__image-placeholder`, `.parallax__image-placeholder`, and `.product-card__img` blocks with `<img>` tags
- **Video** — Add a `<video>` or iframe inside `.video__player` and hook up the “Watch!” button in `js/main.js`
