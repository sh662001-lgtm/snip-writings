const postsData = [
  {
    id: 'night-pack',
    title: 'The Midnight Train to Nowhere',
    date: 'July 11, 2026',
    category: 'Stories',
    excerpt: 'A stranger, a train car, and the unusual quiet that arrives just after midnight.',
    content: `
      <p>The wind had a way of bending time as the train pulled away from the station. In the dim light, shadows became characters, and every unopened door suggested a story waiting on the other side.</p>
      <p>He sat alone in a seat that had once been chosen by someone else, the thin cushion whispering of long journeys. The next stop meant nothing and everything; the map in his head had dissolved into a series of memories that felt both foreign and familiar.</p>
      <blockquote>Not every night has to lead somewhere. Some nights are meant only to remind you that stories can fall sideways into truth.</blockquote>
      <p>Outside, the city slept. Inside, his own thoughts flickered like distant platform lights. He reached for the paper ticket and realized he had lost the one thing the journey seemed to require: certainty.</p>
    `,
  },
  {
    id: 'open-plate',
    title: 'Open Plate, Open Mind',
    date: 'July 10, 2026',
    category: 'Food',
    excerpt: 'How sharing a simple meal can become a small act of kindness and connection.',
    content: `
      <p>There is something honest about a plate left open for a friend. It invites them in without the noise of expectations. The dish does not have to be perfect; it just has to be shared.</p>
      <p>On a day when the world felt loud, a warm bowl and a handwritten note became enough to remind us that food is more than flavor. It is a way of saying, “I remember you.”</p>
    `,
  },
  {
    id: 'pages-and-protest',
    title: 'Pages and Protest',
    date: 'July 8, 2026',
    category: 'Politics',
    excerpt: 'Finding a voice in the chaos, one article at a time.',
    content: `
      <p>Politics is rarely comfortable. It is messy, human, and often unfinished. Writing about it means paying attention to the people behind the headlines.</p>
      <p>When the stories we read and the choices we make do not align, the distance between them becomes a quiet call for change. That call is where writing can be most valuable.</p>
    `,
  },
  {
    id: 'paperbacks-in-the-rain',
    title: 'Paperbacks in the Rain',
    date: 'July 5, 2026',
    category: 'Books',
    excerpt: 'A short reflection on why some books feel like old friends you find again.',
    content: `
      <p>Some books are only meant to be discovered in the right weather. A rainy afternoon offers the kind of quiet that lets sentences breathe.</p>
      <p>The pages on my desk are still damp with memory, not from the rain, but from the way one story stayed with me after I closed the cover. It is a reminder that a book is not just a story; it is a companion.</p>
    `,
  },
];

function getCategoryFilter() {
  return new URLSearchParams(window.location.search).get('category');
}

function renderLatestPosts(container, count = 3) {
  const items = [...postsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
  container.innerHTML = items.map(renderCard).join('');
}

function renderPostList(container, category) {
  let items = [...postsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  if (category) {
    items = items.filter(post => post.category === category);
  }
  if (!items.length) {
    container.innerHTML = '<p class="no-posts">No posts found for this category.</p>';
    return;
  }
  container.innerHTML = items.map(renderCard).join('');
}

function renderCard(post) {
  return `
    <article class="post-card">
      <p class="category-pill">${post.category}</p>
      <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
      <p class="post-meta">${post.date}</p>
      <p>${post.excerpt}</p>
      <a href="post.html?id=${post.id}">Read more →</a>
    </article>
  `;
}

function renderPostPage(container, id) {
  const post = postsData.find(item => item.id === id);
  if (!post) {
    container.innerHTML = `
      <section class="post-card">
        <h1>Post not found</h1>
        <p>Sorry, we could not find that story.</p>
        <a href="posts.html">Back to the blog</a>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <article>
      <p class="category-pill">${post.category}</p>
      <h1>${post.title}</h1>
      <p class="post-meta">${post.date}</p>
      ${post.content}
      <p><a href="posts.html">Back to the blog</a></p>
    </article>
  `;
}
