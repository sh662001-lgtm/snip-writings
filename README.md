# SNip Writings

This is a simple static blog website for SNip Writings.

## What is included

- `index.html` — home page with an introduction and latest posts
- `posts.html` — blog list with category filters
- `post.html` — individual post page rendered from `posts.js`
- `about.html` — about page for your blog and writing
- `contact.html` — contact page with an email link
- `styles.css` — styling for the site
- `posts.js` — post data and rendering logic

## How to preview locally

1. Open the folder in a code editor or file explorer.
2. Start a local server from the folder, for example using Python:

   ```powershell
   cd C:\Users\sh662\.grok\snip-writings
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser.

## How to add a new post

1. Open `posts.js`.
2. Add a new object to the `postsData` array with `id`, `title`, `date`, `category`, `excerpt`, and `content`.
3. Save the file and refresh the site.

## Hosting

Because this site is static, you can publish it to any static host:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Just upload the folder contents or connect your repository.
