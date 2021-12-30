// Write your code here!
main.remove();

const yourName = 'Alison';
const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.textContent = `${yourName} is the champion`
document.body.append(newHeader);