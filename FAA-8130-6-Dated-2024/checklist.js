function downloadPDF() {
  const doc = new jsPDF();
  const items = document.querySelectorAll('input[type=checkbox]');
  let y = 10;
  items.forEach((item, index) => {
    const label = item.parentElement.innerText;
    const checked = item.checked ? '[X]' : '[ ]';
    doc.text(`${checked} ${label}`, 10, y);
    y += 10;
  });
  doc.save('FAA_8130-6_Checklist.pdf');
}
