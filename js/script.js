// 入力した文字を数える
const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  if (text.value.length > 100) {
    count.classList.add('alert');
  } else {
    count.classList.remove('alert');
  }
});

// チェックを入れるとボタンを押せるようにする
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

check.addEventListener('change', () => {
  if (isAgreed.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
