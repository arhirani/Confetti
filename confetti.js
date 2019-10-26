(function () {
  const confetti = $('.confetti');
  const collection = [];
  const len = confetti.length;
  let index = 0;
  
  while(index!=len) {
    let leaves = confetti[index];
    let size = Math.random() * 0.9;
    leaves.innerHTML = '<div class="rotate3D"><div class="anime"></div></div>';
    let leaf = leaves.animate([
      { transform: 'translate3d(' + (index/len*100) + 'vw,0,0) scale(' + size + ')', opacity: size },
      { transform: 'translate3d(' + (index/len*100 + 10) + 'vw,100vh,0) scale(' + size + ')', opacity: 1 }
    ], {
      duration: Math.random() * 3000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 2000)
    });
    collection.push(leaf);
    ++index;
  }
})();

