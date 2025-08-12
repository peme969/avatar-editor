![banner](https://github.com/peme969/avatar-editor/blob/main/Avatar-Editor.png?raw=true)

# Avatar Editor

_A project by **[Peme969](https://github.com/peme969)** and **[Z!](https://github.com/zmushtare)**_

This is a browser-based avatar editor. It has a scrollable item list, layered preview, theme toggle, per-category random selection, and a live price display for the chosen items.

**Live Demo:** [avatar.peme969.dev](https://avatar.peme969.dev/)

---

## Features

- Layered avatar preview: body, clothing, neck, hair, background, nose/mouth, eyes, face, hat.
- Sidebar with category buttons to filter items.
- Item cards show an image, name, XP, and coin cost.
- Random button in each category to select a random item.
- Live total cost display that updates when you pick items.
- Dark and light themes with preference saved in `localStorage`.
- Layout works on both desktop and mobile screens.
- CSS variables for theme customization.

---

## Planned Additions

- Save and load avatars as JSON or an image.
- Allow users to upload custom images for layers.
- Multiple saved avatar slots.
- Drag-and-drop to reorder layers.
- More backgrounds, clothing, and accessories.

---

## How It Works

**HTML**
- `.item` cards for each avatar part.
- Stacked `<img>` layers for the preview.
- Total coin display below the preview.

**CSS**
- Scrollable inventory grid on the left.
- Fixed avatar preview on the right.
- Light and dark themes controlled by CSS variables and a `.dark` class.

**JavaScript**
- Click events update avatar layers.
- Randomizer picks an item in the current category.
- Updates total cost after each change.
- Category filter buttons change the displayed items.
- Theme toggle saves preference in `localStorage`.

---

## Adding Items

Example `.item` card:

```html
<div class="item eyes">
  <img class="item-img" src="path/to/image.png" />
  <span class="item-description">Name</span>
  <span class="item-xp">0</span>
  <span class="item-coins"><span class="coin-img"></span>125</span>
</div>
