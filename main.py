import sqlite3
import re

DB_FILE = "avatar_shop.db"
INDEX_FILE = "index.html"

def generate_html(allowed_categories=None):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()

    if allowed_categories:
        placeholders = ",".join("?" * len(allowed_categories))
        allowed = [cat.lower() for cat in allowed_categories]

        query = f"""
            SELECT category, displayName, image
            FROM items
            WHERE LOWER(category) IN ({placeholders})
            ORDER BY category, displayName
        """
        c.execute(query, allowed)
    else:
        query = "SELECT category, displayName, image FROM items ORDER BY category, displayName"
        c.execute(query)

    rows = c.fetchall()
    conn.close()

    html = ""
    for category, displayName, image in rows:
        cat_class = category.lower()
        html += f'''
        <div class="item {cat_class}">
          <img class="item-img" src="{image}">
          <span class="item-description">{displayName}</span>
        </div>
'''
    return html.strip()


def update_index_html(new_items_html):
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        html = f.read()

    # Replace contents inside <div class="items">...</div>
    updated_html = re.sub(
        r'(<div class="items">)(.*?)(</div>)',
        lambda m: f'{m.group(1)}\n{new_items_html}\n{m.group(3)}',
        html,
        flags=re.DOTALL
    )

    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        f.write(updated_html)

    print(f"index.html updated with new avatar items.")

if __name__ == "__main__":
    allowed_categories = ['body', 'hair', 'clothing', 'hat', 'face', 'neck']  # Skipping 'title'
    html_output = generate_html(allowed_categories=allowed_categories)
    update_index_html(html_output)
