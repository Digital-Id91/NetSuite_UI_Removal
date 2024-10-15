// Check chrome storage if the UI modification was applied
chrome.storage.local.get('uiModified', (data) => {
  if (data.uiModified) {
    // If modifications were applied before, run the resizeAndMaximize function
    resizeAndMaximize();
  }
});

// Function to remove unnecessary UI elements and maximize the results table
function resizeAndMaximize() {
  const cells = document.querySelectorAll('.uir-list-row-cell, .gridlisttext');
  cells.forEach(cell => {
    cell.style.fontSize = '16px'; // Adjust font size
  });

  const topElement1 = document.getElementById('uif37');
  const topElement2 = document.getElementById('div__header');
  const titleElement = document.querySelector('.uir-page-title.uir-page-title-list.uir-list-title.noprint');
  const controlBar = document.querySelector('.uir-control-bar');
  const filtersHeader = document.querySelector('.uir-filters-header');
  const tableRow = document.querySelector('tbody > tr');
  const topButtonBar = document.querySelector('.uir-list-filter-bar.uir-list-top-button-bar');
  const filtersBody = document.querySelector('.uir-filters-body.uir-filters-body');  // Specific element you want to hide

  if (topElement1) topElement1.style.display = 'none';
  if (topElement2) topElement2.style.display = 'none';
  if (titleElement) titleElement.style.display = 'none';
  if (controlBar) controlBar.style.display = 'none';
  if (filtersHeader) filtersHeader.style.display = 'none';
  if (tableRow) tableRow.style.display = 'none';
  if (topButtonBar) topButtonBar.style.display = 'none';
  if (filtersBody) filtersBody.style.display = 'none';  // Hide filters body

  // Expand the results table to occupy the full screen
  const resultsTable = document.querySelector('.uir-list-body');
  if (resultsTable) {
    resultsTable.style.width = '100%';
    resultsTable.style.height = '100vh';
    resultsTable.style.margin = '0';
    resultsTable.style.padding = '0';
  }

  document.body.style.overflow = 'hidden'; // Remove scrollbars
}
``
