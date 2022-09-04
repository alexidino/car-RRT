
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
  
  console.log('nav >>>', nav);
  if(header.classList.contains('active')) {
  header.classList.remove('active');
  }
})



// const sellcar = document.querySelectorAll('.sellcar-main')[0];
// const sellcarRect = sellcar.getBoundingClientRect().top + 100;
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


// const refAdvantage = document.querySelector('.href-advantage');

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
    // if(item.getBoundingClientRect().top -100 <= window.scrollY) {
    // if(item.getBoundingClientRect().top - 300 >= 0) {
    //   document.querySelector('.order-content--line-fill').classList.remove('fill-33')
    // }
    // console.log(id, item.getBoundingClientRect().top)
    // console.log('item.window >>>', window.scrollY)
    // console.log('orderContent >>>', item)

    orderContent[0].getBoundingClientRect().top - 300 <= 0 
    ? 
    document.querySelector('.order-content--line-fill').classList.add('fill-33') 
    : 
    document.querySelector('.order-content--line-fill').classList.remove('fill-33')

    // if(orderContent[0].getBoundingClientRect().top - 300 <= 0) {
    // document.querySelector('.order-content--line-fill').classList.add('fill-33');
    // }
    // if(orderContent[0].getBoundingClientRect().top - 300 >= 0) {
    //   document.querySelector('.order-content--line-fill').classList.remove('fill-33')
    // }
    if(orderContent[1].getBoundingClientRect().top - 300 <= 0) {
    document.querySelector('.order-content--line-fill').classList.add('fill-67');
    }
    if(orderContent[1].getBoundingClientRect().top - 300 >= 0) {
      document.querySelector('.order-content--line-fill').classList.remove('fill-67')
    }
    if(orderContent[2].getBoundingClientRect().top - 300 <= 0) {
    document.querySelector('.order-content--line-fill').classList.add('fill-100');
    }
    if(orderContent[2].getBoundingClientRect().top - 300 >= 0) {
      document.querySelector('.order-content--line-fill').classList.remove('fill-100')
    }
  });

})
