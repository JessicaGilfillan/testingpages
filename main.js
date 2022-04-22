if (Modernizr.canvas) {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);

  } else {
    alert('Canvas is not supported'); // not-supported
  }



