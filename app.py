from flask import Flask, render_template, Response
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# Tambahkan route untuk sitemap agar Google tahu halaman apa saja yang ada
@app.route("/sitemap.xml")
def sitemap():
    xml = """<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://crossoutsilence.up.railway.app/</loc>
            <lastmod>2024-05-20</lastmod>
            <priority>1.0</priority>
        </url>
    </urlset>"""
    return Response(xml, mimetype='application/xml')

# Tambahkan route untuk robots.txt
@app.route("/robots.txt")
def robots():
    return Response("User-agent: *\nAllow: /\nSitemap: https://crossoutsilence.up.railway.app/sitemap.xml", mimetype='text/plain')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)