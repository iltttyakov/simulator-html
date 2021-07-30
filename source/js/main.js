// Аккордеон
var items = document.querySelectorAll('.accordion-item-header');
items.forEach(function (item) {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('show');
  });
});

// Открытие модальных окон
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("modal-open")) {
    var modal_id = e.toElement.getAttribute("data-modal");
    document.getElementById(modal_id).classList.toggle('modal--open');
  }
});

// Закрытие модальных окон
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("modal-close")) {
    modal = e.toElement.parentElement.parentElement;
    modal.classList.toggle('modal--open');
  }
});

// Закрытие модального окна при клике на оверлей
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("modal")) {
    e.toElement.classList.toggle('modal--open');
  }
});

// Отправка формы Ctr + Enter
function checkKey(e, form) {
  if (e.ctrlKey && e.keyCode == 13) {
    form.submit();
  }

  if (e.target.value.length >= 1) {
    e.target.classList.add('with-data');
  } else {
    e.target.classList.remove('with-data');
  }
}

// Отслеживание изменения формы
function radioChecked(event) {
  event.target.parentNode.querySelector('button').classList.add('button--submit--with-data');
}

