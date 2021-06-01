function vali(){

  let username = document.getElementById('inputUser').value;
  let password = document.getElementById('inputPassword').value;
if(username == 'abcd' && password == '1234' ){
  window.open('./Sudoku/index.html');

}
else return alert('Wrong Username and Password');

}

