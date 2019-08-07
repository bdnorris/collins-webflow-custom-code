<script>
var bigB = document.getElementById('big-b');
var header = document.querySelector('.header');
  console.log('header', header)
bigB.style.transform = 'scale(6) translateY(8vh)'

window.addEventListener('scroll', throttle(callback, 1000));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function callback() {
console.log('hi', header.offsetTop, window.scrollY);
  if (header.offsetTop <= window.scrollY - 70) {
    bigB.style.transform = 'scale(1)'
  
  } else {
    bigB.style.transform = 'scale(6) translateY(8vh)'
    
  }
}
</script>