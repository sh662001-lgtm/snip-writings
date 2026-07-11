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

### Publish using GitHub Pages

1. Create a new GitHub repository named `snip-writings` (or similar).
2. Push this folder to the repository:

   ```powershell
   cd C:\Users\sh662\.grok\snip-writings
   git remote add origin https://github.com/YOUR_USERNAME/snip-writings.git
   git branch -M main
   git push -u origin main
   ```

3. In GitHub, enable Pages on the `main` branch and set the folder to `/ (root)`.
4. Your site will appear at `https://YOUR_USERNAME.github.io/snip-writings/`.

If you'd like, I can also help you create the repository and push the files from your machine.
