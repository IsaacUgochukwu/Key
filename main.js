function generatePassword() {
  // Importing elements needed
  let password = document.getElementById('password');
  let text = ['hdjf', 'hdukd', 'hdjdjd', 'jdjdnf'];
  let num = ['277474', '374674', '907478', '686393'];
  let min = 0;
  let max = 3;
  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
  let genPassword = text[randNum] + num[randInt];
  
  // Modifying elements imported
  password.value = genPassword;
}

function hide() {
  // Importing elements needed
  let hide = document.getElementById('hide');
  let show = document.getElementById('show');
  let password = document.getElementById('password');
  
  if (password.type === 'text') {
    password.type = 'password';
  } else {
    // Do nothing
  }
  
  // Modifying elements needed
  hide.style.display = 'none';
  show.style.display = 'flex';
  show.style.justifyContent = 'center';
  show.style.alignItems = 'center';
}

function show() {
  // Importing elements needed
  let hide = document.getElementById('hide');
  let show = document.getElementById('show');
  let password = document.getElementById('password');
  
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    // Do nothing
  }

  // Modifying elements needed
  show.style.display = 'none';
  hide.style.display = 'flex';
  hide.style.justifyContent = 'center';
  hide.style.alignItems = 'center';
}

function copy() {
  // Importing elements needed
  let password = document.getElementById('password');
  let copy = document.getElementById('copy');
  
  // Modifying elements needed
  navigator.clipboard.writeText(password.value);
  copy.innerHTML = 'Copied';
}

function showMenu() {
  // Importing elements needed
  let menu = document.getElementById('menu');
  let menubtn = document.getElementById('menubtn');

  // Modifying elements needed
  menu.style.top = '80px';
  menubtn.style.display = 'none';
}

function back() {
  // Importing elements needed
  let menu = document.getElementById('menu');
  let menubtn = document.getElementById('menubtn');
  // Modifying elements needed
  menu.style.top = '-180px';
  menubtn.style.display = 'flex';
  menubtn.style.justifyContent = 'center';
  menubtn.style.alignItems = 'center';
}



