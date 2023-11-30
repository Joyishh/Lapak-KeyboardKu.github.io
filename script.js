const navbar = document.querySelector('.navbar'),
  SearchIcon = document.querySelector('#SearchIcon');

SearchIcon.addEventListener('click', () => {
  navbar.classList.toggle('OpenSearch');
  if (navbar.classList.contains('OpenSearch')) {
    return SearchIcon.classList.replace('uli-search', 'uli-times');
  }
  SearchIcon.classList.replace('uli-times', 'uli-search');
});
