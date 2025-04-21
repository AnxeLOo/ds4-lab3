/**
 * SlideMenuController
 * Controla o comportamento do menu deslizante.
 */
const SlideMenuController = (() => {
  const menu = document.getElementById('slideMenu');
  const openBtn = document.getElementById('openMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const menuItemsContainer = document.getElementById('menuItemsContainer');

  /**
   * Lista de itens do menu
   * Pode ser reutilizada externamente para modificar dinamicamente o conteúdo.
   */
  const menuItems = [
    { label: 'Início', href: '#' },
    { label: 'Perfil', href: '#' },
    { label: 'Explorar', href: '#' },
    { label: 'Reels', href: '#' },
    { label: 'Mensagens', href: '#' },
    { label: 'Configurações', href: '#' },
  ];

  /**
   * Cria os itens de menu dinamicamente no DOM.
   */
  function renderMenuItems() {
    menuItemsContainer.innerHTML = '';
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      menuItemsContainer.appendChild(li);
    });
  }

  /**
   * Abre o menu deslizante.
   */
  function openMenu() {
    menu.classList.add('open');
  }

  /**
   * Fecha o menu deslizante.
   */
  function closeMenu() {
    menu.classList.remove('open');
  }

  /**
   * Inicializa o componente.
   */
  function init() {
    renderMenuItems();
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
  }

  init();

  // Interface pública
  return {
    openMenu,
    closeMenu,
    renderMenuItems,
    menuItems,
  };
})();
