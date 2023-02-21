const imgs = document.querySelectorAll('.slideshow-container img');
const circleSign = document.querySelectorAll('.circle-sign')

let count = 1

setInterval(() => {
  if (count > 2) {
    count = 0
  }
  imgs.forEach((value,index) => {
    imgs[index].classList.remove('active')
    circleSign[index].classList.remove('active')
  })
  imgs[count].classList.add('active')
  circleSign[count].classList.add('active')
  count++
},6000)