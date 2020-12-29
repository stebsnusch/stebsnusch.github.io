function hideMainSection() {
  const mainSection = document.getElementById('home');
  mainSection.classList.add('hidden');
}

function showMainSection() {
  const mainSection = document.getElementById('home');
  mainSection.classList.remove('hidden');
}

function toggleSection(item) {
  hideMainSection();
  const selectedSection = document.getElementById(item);
  selectedSection.classList.toggle('hidden');
}

function goBack(item) {
  toggleSection(item);
  showMainSection();
}
