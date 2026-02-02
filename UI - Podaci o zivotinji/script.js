const pages = document.querySelectorAll('section.card');
const steps = document.querySelectorAll('.step');

function showPage(n) {
  pages.forEach((p, i) => p.classList.toggle('hidden', i !== n - 1));
  steps.forEach((s, i) => s.classList.toggle('active', i === n - 1));
}

function updateDateTime() { 
	var now = new Date(); 
	var date = now.toLocaleDateString(); 
	var time = now.toLocaleTimeString(); 
	document.getElementById('datumPregleda').innerHTML = date + "";
	document.getElementById('vremePregleda').innerHTML = time + "";
	} 
setInterval(updateDateTime, 1000);


document.addEventListener('click', e => {
  const btn = e.target.closest('[data-go-to]');
  if (!btn) return;
  showPage(parseInt(btn.dataset.goTo));
});
