// ============================================================
//  RAÍZES MEDICINAIS — script.js
// ============================================================

let activeTag = null;

// ---------- INICIALIZAÇÃO ----------
document.addEventListener('DOMContentLoaded', () => {
  buildFilterTags();
  renderPlants(plants);
  updateCount(plants.length, plants.length);
});

// ---------- EXTRAIR TODAS AS TAGS ÚNICAS ----------
function buildFilterTags() {
  const allTags = [...new Set(plants.flatMap(p => p.tags))].sort();
  const container = document.getElementById('filterTags');
  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-tag';
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.addEventListener('click', () => toggleTag(tag, btn));
    container.appendChild(btn);
  });
}

// ---------- FILTRO POR TAG ----------
function toggleTag(tag, btn) {
  const allBtns = document.querySelectorAll('.filter-tag');
  if (activeTag === tag) {
    activeTag = null;
    allBtns.forEach(b => b.classList.remove('active'));
  } else {
    activeTag = tag;
    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  applyFilters();
}

// ---------- BUSCA ----------
function filterPlants() {
  activeTag = null;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  applyFilters();
}

// ---------- APLICAR FILTROS ----------
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();

  const filtered = plants.filter(p => {
    const matchTag  = activeTag ? p.tags.includes(activeTag) : true;
    const matchText = query
      ? p.name.toLowerCase().includes(query) ||
        p.scientific.toLowerCase().includes(query) ||
        p.shortUse.toLowerCase().includes(query) ||
        p.uses.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      : true;
    return matchTag && matchText;
  });

  renderPlants(filtered);
  updateCount(filtered.length, plants.length);
}

// ---------- RENDERIZAR CARDS ----------
function renderPlants(list) {
  const grid     = document.getElementById('plantsGrid');
  const noResult = document.getElementById('noResults');
  grid.innerHTML = '';

  if (list.length === 0) {
    noResult.classList.remove('hidden');
    return;
  }
  noResult.classList.add('hidden');

  list.forEach((plant, index) => {
    const card = document.createElement('div');
    card.className = 'plant-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver detalhes de ${plant.name}`);

    card.innerHTML = `
      <img
        src="${plant.photo}"
        alt="Foto de ${plant.name}"
        loading="lazy"
        onerror="this.src='https://placehold.co/400x200/d8f3dc/2d6a4f?text=🌿+${encodeURIComponent(plant.name)}'"
      />
      <div class="plant-card-body">
        <h3>${plant.name}</h3>
        <p class="scientific">${plant.scientific}</p>
        <p class="short-use">${plant.shortUse}</p>
        <div class="card-tags">
          ${plant.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(index, list));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(index, list); });
    grid.appendChild(card);
  });
}

// ---------- ATUALIZAR CONTAGEM ----------
function updateCount(shown, total) {
  const label = document.getElementById('countLabel');
  if (shown === total) {
    label.textContent = `${total} plantas no acervo`;
  } else {
    label.textContent = `${shown} de ${total} plantas encontradas`;
  }
}

// ---------- MODAL: ABRIR ----------
function openModal(index, list) {
  const plant   = list[index];
  const overlay = document.getElementById('modalOverlay');

  const mainImg = document.getElementById('modalImg');
  mainImg.src = plant.photo;
  mainImg.alt = `Foto de ${plant.name}`;
  mainImg.onerror = function() {
    this.src = `https://placehold.co/640x260/d8f3dc/2d6a4f?text=🌿+${encodeURIComponent(plant.name)}`;
  };

  // Galeria de fotos extras
  const gallery = document.getElementById('modalGallery');
  gallery.innerHTML = '';
  if (plant.photos && plant.photos.length > 0) {
    gallery.classList.remove('hidden');
    plant.photos.forEach((url, i) => {
      const thumb = document.createElement('img');
      thumb.src = url;
      thumb.alt = `Foto ${i + 2} de ${plant.name}`;
      thumb.loading = 'lazy';
      thumb.title = `Foto ${i + 2}`;
      thumb.onerror = function() {
        this.src = `https://placehold.co/120x80/d8f3dc/2d6a4f?text=🌿`;
      };
      thumb.addEventListener('click', () => {
        mainImg.src = url;
        mainImg.onerror = function() {
          this.src = `https://placehold.co/640x260/d8f3dc/2d6a4f?text=🌿+${encodeURIComponent(plant.name)}`;
        };
        gallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      gallery.appendChild(thumb);
    });
  } else {
    gallery.classList.add('hidden');
  }

  document.getElementById('modalName').textContent       = plant.name;
  document.getElementById('modalScientific').textContent = plant.scientific;
  document.getElementById('modalUses').textContent       = plant.uses;
  document.getElementById('modalHow').textContent        = plant.how;
  document.getElementById('modalWarning').textContent    = plant.warning || '';

  document.getElementById('modalTags').innerHTML =
    plant.tags.map(t => `<span class="tag">${t}</span>`).join('');

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// ---------- MODAL: FECHAR ----------
function closeModalBtn() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function closeModal(event) {
  if (event.target === document.getElementById('modalOverlay')) {
    closeModalBtn();
  }
}

// Fechar com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
});
