let text = document.getElementById('click');

function onClick() {
  if (text.textContent === 'Follow') {
    return (text.textContent = 'Following');
  }
  return (text.textContent = 'Follow');
}

console.log(text.textContent);
