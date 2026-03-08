const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

const previewUrl = document.getElementById('preview-url');
const tableNumber = document.getElementById('table-number');
const params = new URLSearchParams(window.location.search);
const table = params.get('table');

if (previewUrl) {
  previewUrl.textContent = window.location.href;
}

if (tableNumber) {
  tableNumber.textContent = table ? `Table ${table}` : 'Not provided';
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const panelId = tab.dataset.panel;

    tabs.forEach((item) => item.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(panelId).classList.add('active');
  });
});
