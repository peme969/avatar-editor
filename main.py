import sqlite3
import os
import requests
from urllib.parse import urlparse

# === CONFIG ===
DB_PATH = "items.db"            # Path to your SQLite DB
TABLE_NAME = "items"            # Replace with your actual table name
COLUMN_NAME = "image_url"       # Column containing the image URLs
IMAGE_DIR = "images"            # Folder to save images

# === CREATE IMAGE FOLDER ===
os.makedirs(IMAGE_DIR, exist_ok=True)

# === CONNECT TO DATABASE ===
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# === GET IMAGE URLS ===
try:
    cursor.execute(f"SELECT {COLUMN_NAME} FROM {TABLE_NAME}")
    rows = cursor.fetchall()
except sqlite3.OperationalError as e:
    print(f"Database error: {e}")
    conn.close()
    exit()

# === DOWNLOAD IMAGES ===
for row in rows:
    image_url = row[0]
    if not image_url:
        continue

    try:
        # Extract filename from URL
        filename = os.path.basename(urlparse(image_url).path)
        filepath = os.path.join(IMAGE_DIR, filename)

        # Download image
        response = requests.get(image_url, timeout=10)
        response.raise_for_status()

        # Save image
        with open(filepath, "wb") as f:
            f.write(response.content)
        print(f"Downloaded: {filename}")

    except Exception as e:
        print(f"Failed to download {image_url}: {e}")

# === CLEAN UP ===
conn.close()
