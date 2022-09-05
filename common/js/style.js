
// --- Nav background ---


const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

function toggleScrollClass() {
  window.pageYOffset > 0 ?  header.classList.add('bg-fade') : header.classList.remove('bg-fade');
}
window.addEventListener('scroll', function() {toggleScrollClass()});

const menu = document.querySelector('.menu-icon');
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  header.classList.add('active');
})

nav.addEventListener('click', (e) => {
  if(header.classList.contains('active')) {
  header.classList.remove('active');
  }
})


// -------------- href active background -------------


const orderContent = document.querySelectorAll('.order-content--item');
const selector = [... document.querySelectorAll('.advantage-main, .order-main, .documents-main, .map-block')]
let currentItem = '';

document.querySelectorAll('.nav-menu a').forEach((item, id) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    currentItem = id;
    selector.forEach((itemClass, id) => { 
      
        let topCoord;
        if(currentItem === id) {
          topCoord = itemClass.getBoundingClientRect().top - 100 + window.scrollY;
          window.scrollTo({
            top: topCoord,
            behavior: "smooth"
          });
        };
    });
  });
});


// --------- scroll animation ----------


window.addEventListener('scroll', () => {
  selector.forEach((item, id) => {
    // console.log(item.offsetTop);
    if(item.offsetTop - 250 <= window.scrollY) {
      document.querySelectorAll('.nav-menu a').forEach((item) => {
        if(item.classList.contains('href-color')) {
        item.classList.remove('href-color');
        }
      })
      document.querySelectorAll('.nav-menu li')[id].querySelector('a').classList.add('href-color');
    }
  });

  orderContent.forEach((item, id) => {
    console.log('>>>', orderContent[id].getBoundingClientRect().top)
    orderContent[id].getBoundingClientRect().top - 400 <= 0 
    ? 
    document.querySelector('.order-content--line-fill').classList.add(`fill-${id}`) ||
    item.classList.add('active-item') 
    : 
    document.querySelector('.order-content--line-fill').classList.remove(`fill-${id}`) ||
    item.classList.remove('active-item') 
  });
})

// --------------- Yandex map scroll off ----------------

const mapBlock = document.querySelector('.map-block');
const mapTitle = document.createElement('div');
mapTitle.className = 'map-title';
mapTitle.textContent = 'Для активации карты нажмите по ней';
mapBlock.appendChild(mapTitle);

mapBlock.addEventListener('click', () => {
  mapBlock.children[0].style.removeProperty('pointer-events');
  mapTitle.parentElement.removeChild(mapTitle);
})

mapBlock.onmousemove = (e) => {
  mapTitle.style.display = 'block';
  if(e.offsetY > 10) mapTitle.style.top = e.offsetY + 20 + 'px';
  if(e.offsetX > 10) mapTitle.style.left = e.offsetX + 20 + 'px';
};

mapBlock.onmouseleave = (e) => {
  mapTitle.style.display = 'none';
};



