const categories = ['Stories', 'Politics', 'Food', 'Books', 'Opinion'];
const STORAGE_KEY = 'snipWritingsPosts';
const postsData = [];

function loadSavedPosts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function allPosts() {
  return [...postsData, ...loadSavedPosts()]
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(value) {
  if (!value) {
    return new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 40);
}

function initPage() {
  populateCategoryOptions();
  bindTabs();
  bindForm();
  renderCategoryFilters();
  renderPostList();
  setDefaultDate();
}

function populateCategoryOptions() {
  const categorySelect = document.getElementById('post-category');
  categorySelect.innerHTML += categories.map(category => `<option value="${category}">${category}</option>`).join('');
}

function bindTabs() {
  const tabButtons = document.querySelectorAll('.site-nav button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      switchTab(button.dataset.tab);
    });
  });
}

function switchTab(tabId) {
  const tabButtons = document.querySelectorAll('.site-nav button');
  tabButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === tabId);
  });

  if (tabId === 'posts') {
    renderCategoryFilters();
    renderPostList();
  }
}

function bindForm() {
  const form = document.getElementById('post-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    saveNewPost();
  });
}

function setDefaultDate() {
  const dateInput = document.getElementById('post-date');
  if (dateInput && !dateInput.value) {
    const today = new Date().toISOString().slice(0, 10);
    dateInput.value = today;
  }
}

function saveNewPost() {
  const title = document.getElementById('post-title').value.trim();
  const dateValue = document.getElementById('post-date').value;
  const category = document.getElementById('post-category').value;
  const excerpt = document.getElementById('post-excerpt').value.trim();
  const content = document.getElementById('post-content').value.trim();
  const message = document.getElementById('form-message');

  if (!title || !category || !excerpt || !content) {
    message.textContent = 'Please complete every field before saving your post.';
    return;
  }

  const id = `${createSlug(title)}-${Date.now()}`;
  const post = {
    id,
    title,
    date: dateValue ? formatDate(dateValue) : formatDate(''),
    category,
    excerpt,
    content: content.split('\n').map(line => `<p>${line.trim()}</p>`).join(''),
  };

  const posts = loadSavedPosts();
  posts.unshift(post);
  savePosts(posts);

  message.textContent = 'Your post has been saved. It is now visible in Posts.';
  message.style.color = 'var(--accent)';
  document.getElementById('post-form').reset();
  setDefaultDate();
  renderPostList();
  switchTab('posts');
}

function renderCategoryFilters(selectedCategory = '') {
  const filterContainer = document.getElementById('category-filters');
  filterContainer.innerHTML = `
    <button class="category-filter ${selectedCategory === '' ? 'active' : ''}" data-category="">All</button>
    ${categories.map(category => `<button class="category-filter ${category === selectedCategory ? 'active' : ''}" data-category="${category}">${category}</button>`).join('')}
  `;

  document.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', () => {
      renderCategoryFilters(button.dataset.category);
      renderPostList(button.dataset.category);
    });
  });
}

function renderPostList(category = '') {
  const container = document.getElementById('post-list');
  const posts = category ? allPosts().filter(post => post.category === category) : allPosts();
  const detail = document.getElementById('post-detail');
  detail.classList.add('hidden');

  if (!posts.length) {
    container.innerHTML = '<p class="no-posts">No posts yet. Add your first post in the New Post tab.</p>';
    return;
  }

  container.innerHTML = posts.map(renderCard).join('');
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      const post = allPosts().find(item => item.id === button.dataset.id);
      if (post) {
        renderPostDetail(post);
      }
    });
  });
}

function renderCard(post) {
  return `
    <article class="post-card">
      <p class="category-pill">${post.category}</p>
      <h3>${post.title}</h3>
      <p class="post-meta">${post.date}</p>
      <p>${post.excerpt}</p>
      <button class="link-button read-more" type="button" data-id="${post.id}">Read more →</button>
    </article>
  `;
}

function renderPostDetail(post) {
  const detail = document.getElementById('post-detail');
  detail.innerHTML = `
    <article class="post-card">
      <p class="category-pill">${post.category}</p>
      <h2>${post.title}</h2>
      <p class="post-meta">${post.date}</p>
      ${post.content}
      <button class="link-button detail-close" type="button">Back to posts</button>
    </article>
  `;
  detail.classList.remove('hidden');
  detail.querySelector('.detail-close').addEventListener('click', () => {
    detail.classList.add('hidden');
  });
}
