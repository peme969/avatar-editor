![banner](https://github.com/peme969/avatar-editor/blob/main/Avatar-Editor.png?raw=true)

# Avatar Editor

_A collaborative project by **[Peme969](https://github.com/peme969) x [Z!](https://github.com/zmushtare)**_

A lightweight, browser-based avatar editor with a scrollable item inventory, layered preview, dark/light theme toggle, "random" selection per category, and live price tally based on selected items.

## **Live Demo:** [avatar.peme969.dev](https://avatar.peme969.dev/)

---

## Features

- **Layered avatar preview** - body, clothing, neck, hair, background, nose/mouth, eyes, face, hat.
- **Category sidebar** - filter items by type.
- **Item cards** - display image, label, XP, and coin cost in a scrollable grid.
- **Randomizer per category** - picks a random item in the active category.
- **Live price calculation** - updates as you choose items.
- **Dark / Light theme toggle** - preference saved in `localStorage`.
- **Responsive layout** - works on both desktop and mobile screens.
- **CSS variables** for quick theme customization.

---

## Upcoming Features

- **Save & Load Avatars** - export your creation as a JSON or image and reload it later.
- **Custom Image Uploads** - allow users to add their own layers.
- **Multiple Avatar Slots** - switch between different saved designs instantly.
- **Drag-and-Drop Layer Reordering** - change stacking order without editing code.
- **Expanded Item Library** - more backgrounds, clothing, and accessories.

---

## Demo

![Randomizer Demo](coming soon!)

---

## How It Works

- **HTML Structure**
  - Inventory with `.item` cards for each avatar part.
  - Avatar preview with stacked `<img>` layers.
  - Dynamic price display below the preview.

- **CSS Styling**
  - Scrollable inventory grid on the left, fixed avatar preview on the right.
  - Light/dark themes using CSS variables and a `.dark` class.

- **JavaScript Behavior**
  - Click handlers update avatar layers.
  - Randomizer for each category.
  - Total coin calculation after each change.
  - Category filter buttons.
  - Theme toggle saved in `localStorage`.

---

## Adding Items

Each item is a `.item` card:

```html
<div class="item eyes">
  <img class="item-img" src="path/to/image.png" />
  <span class="item-description">Name</span>
  <span class="item-xp">0</span>
  <span class="item-coins"><span class="coin-img"></span>125</span>
</div>
