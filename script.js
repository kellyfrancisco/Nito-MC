
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const span = button.querySelector('.info');
    span.classList.toggle('oculto');
  });
});