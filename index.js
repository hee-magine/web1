const myBtn = document.getElementById('btn');
function event1() {
  alert('hi');
}
function event2(event) {
  console.log(event);
}

myBtn.addEventListener('click',event1);
myBtn.addEventListener('click',event2);
const one = document.querySelector('#one');
const fields = document.querySelectorAll('[data-field]');
const task = {
  title: '만쥬 밥 주기, 놀아주기',
  manager: 'hee-magine / Heesan Kang',
  status: ''
}

for (let tag of fields) {
  const field = tag.dataset.field;
  tag.textContent = task[field]
}

const btns = document.querySelectorAll('.btn')
for (let btn of btns) {
  const status = btn.dataset.status;
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;
  }
}

