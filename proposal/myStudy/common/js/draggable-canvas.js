const Sequence = function(canvas, w, h) {

  const ctx = canvas.getContext('2d');

  const seqPathPrefix = canvas.getAttribute('data-seq-path-prefix')
  const seqLength = canvas.getAttribute('data-seq-length')
  const imgSeq = [];
  let canvasWidth;
  let canvasHeight;
  let currentTime = 0;
  let animationId;
  let isAllImageLoaded = false;

  const resizeHandler = function() {
    canvasWidth = w ? w : canvas.scrollWidth;
    canvasHeight = h ? h : canvas.scrollHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // console.log(canvas.scrollWidth);
  }

  window.addEventListener('resize', resizeHandler)
  resizeHandler();

  const promises = []
  for (let index = 1; index <= seqLength; index++) {
    const img = new Image()
    // img.src = seqPathPrefix + ('00000' + index).slice(-5) + '.jpg'
    const uri = decodeURI(seqPathPrefix + index + '.png')
    // console.log(uri)
    img.src = uri
    imgSeq.push(img);

    promises.push(new Promise((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject()
    }))
  }
  Promise.all(promises).then(() => {
    isAllImageLoaded = true;
  })

  this.update = function(progress) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // [NOTE] circular
    let circularProgress = progress % 1;
    let frame = circularProgress > 0 ? circularProgress : 1 + circularProgress;
    const index = Math.floor(frame * seqLength);
    
    
    // console.log(`SEQUENCE FRAME:: ${index}`);
    
    // [NOTE] this like object-fit: cover;
    // ctx.drawImage(imgSeq[index], 0, 0, imgSeq[index].width, imgSeq[index].height);
    drawImageProp(ctx, imgSeq[index], 0, 0, canvasWidth, canvasHeight);
  }

  this.updateRaw = function(progress) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // [NOTE] circular
    let circularProgress = progress % 1;
    let frame = circularProgress > 0 ? circularProgress : 1 + circularProgress;
    const index = Math.floor(frame * seqLength);

    ctx.drawImage(imgSeq[index], 0, 0, imgSeq[index].width, imgSeq[index].height);
  }

  this.play = function() {

    let fpsInterval, startTime, now, then, elapsed, fps = 30;
    fpsInterval = 2000 / fps;
    then = Date.now();
    startTime = then;

    function render() {
      animationId = requestAnimationFrame(render)

      now = Date.now();
      elapsed = now - then;

      // if enough time has elapsed, draw the next frame

      if (elapsed > fpsInterval) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        if(isAllImageLoaded) {
          drawImageProp(ctx, imgSeq[currentTime % imgSeq.length], 0, 0, canvasWidth, canvasHeight);
          currentTime++;
        }
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here

      }
    }

    render()
  }

  this.stop = function() {
    if(animationId) cancelAnimationFrame(animationId)
  }

  function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
  }
};
;// CONCATENATED MODULE: ./src/main/webapp/assets/js/lib/news-list.js