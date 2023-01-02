let para = document.getElementById('para');
let text = document.getElementById('txt');
let text2 = document.getElementById('txt2');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

window.addEventListener('load', () => {
  text.placeholder = new Date().getHours();
  text2.placeholder = new Date().getMinutes();
});


      text.value = '';
      text2.value = '';
    });
  }
}
