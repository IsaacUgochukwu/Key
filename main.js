function generatePassword() {
  // Importing elements needed
  let password = document.getElementById('password');
  let copy = document.getElementById('copy').innerHTML = 'Copy';
  
  let text = ['hdjf', 'hdukd', 'hdjdjd', 'jdjdnf', 'ytyoe', 'sdgklnd', 'jkshirxkd', 'whgshsb', 'jdkdnd', 'njdnd', 'ioueiye'];
  let num = ['277474', '374674', '907478', '686393', '07838', '542526', '351563', '53737883', '882627', '797388', '898223'];
  let min = 0;
  let max = 10;
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

function hidesave() {
  // Importing elements needed
  let hide = document.getElementById('hidesave');
  let show = document.getElementById('showsave');
  let password = document.getElementById('generatedpassword');

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

function showsave() {
  // Importing elements needed
  let hide = document.getElementById('hidesave');
  let show = document.getElementById('showsave');
  let password = document.getElementById('generatedpassword');

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
  let savebox = document.getElementById('savebox');
  let generatedpassword = document.getElementById('generatedpassword');
  
  // Modifying elements needed
  navigator.clipboard.writeText(password.value);
  copy.innerHTML = '✔️';
  
  if (password.value) {
  generatedpassword.value = password.value;
  setTimeout(() => {
    savebox.style.display = 'block';
  }, 1000)
  } else {
    // Do nothing
  }
}

function showMenu() {
  // Importing elements needed
  let menu = document.getElementById('menu');
  let menubtn = document.getElementById('menubtn');

  // Modifying elements needed
  menu.style.top = '10px';
  menubtn.style.display = 'none';
}

function back() {
  // Importing elements needed
  let menu = document.getElementById('menu');
  let menubtn = document.getElementById('menubtn');
  // Modifying elements needed
  menu.style.top = '-90%';
  menubtn.style.display = 'flex';
  menubtn.style.justifyContent = 'center';
  menubtn.style.alignItems = 'center';
}

function cancel() {
  // Importing elements needed
  let savebox = document.getElementById('savebox').style.display = 'none';
  let copy = document.getElementById('copy').innerHTML = 'Copy';
}

function savep() {
  // Importing elements needed
  let pname = document.getElementById('pname').value;
  let generatedpassword = document.getElementById('generatedpassword').value;
  let savesec = document.getElementById('savesec');
  let savebox = document.getElementById('savebox');
  let nosave = document.getElementById('nosave').style.display = 'none';
  
  //Creating elements
  let span = document.createElement('span');
  span.className = 'saved';
  span.innerHTML = pname + ' - ' + generatedpassword;
  
  //Modifying elements imported
  savesec.appendChild(span);
  
  setTimeout(() => {
    savebox.style.display = 'none';
  }, 1000 / 2);
  
  setTimeout(() => {
    alert('Password saved ✔️, check your menu!');
  }, 1000 + 1)
}