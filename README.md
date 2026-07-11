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

## How to use the site

- Open `index.html` to see the three-tab blog.
- Use the `New Post` tab to write and save your posts directly in the browser.
- Use the `Posts` tab to browse saved posts sorted by category.
- Use the `About` tab to update your bio and blog description.
- Click the `Owner mode` button in the header to show edit and delete controls for your posts.

Saved posts are stored in your browser's local storage. If you want the content to work on every device, you can also add posts directly to `posts.js`.

## How to add a post by editing code

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

### Custom domain setup

This repo already includes a `CNAME` file with:

```text
snipwritings.com
```

To use `snipwritings.com`, do this:

1. Register the domain with a domain registrar such as Namecheap, Google Domains, or GoDaddy.
2. In your registrar’s DNS settings, add these records:
   - A record for `@` pointing to `185.199.108.153`
   - A record for `@` pointing to `185.199.109.153`
   - A record for `@` pointing to `185.199.110.153`
   - A record for `@` pointing to `185.199.111.153`
   - CNAME record for `www` pointing to `sh662001-lgtm.github.io.`
3. In your GitHub repository settings, under Pages, enter `snipwritings.com` as the custom domain.
4. Wait a few minutes for DNS to propagate.

After that, your site will work at:

- `https://snipwritings.com`
- `https://www.snipwritings.com` (if you add the `www` CNAME)

If you want, I can now help you register the domain and verify the DNS setup step by step.
