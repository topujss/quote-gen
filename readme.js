const btn = document.querySelector('button');
btn.style.cursor = 'pointer';

btn.onclick = () => {
  const random = Number.parseInt(Math.random() * fullArray.length + 1);
  const qOutput = document.querySelector('#q-output');
  qOutput.innerHTML = `"${fullArray[random].quote}"`;

  const aOutput = document.querySelector('#a-output');
  aOutput.innerHTML = `--${fullArray[random].auther}`;
};

const btn2 = document.querySelector('#full-scr');

btn2.onclick = (e) => {
  e.preventDefault();

  if (!webgl.fullscreen) {
    webgl.fullscreen = true;

    document.documentElement.requestFullscreen();
    btn2.innerHTML = 'Fullscreen true';
  } else {
    webgl.fullscreen = false;
    document.exitFullscreen();
    btn2.innerHTML = '!fullscreen';
  }
};
