import {getUsers} from './api/userApi';

//Populate table of users via API calls
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
      usersBody+=
        `<tr>
          <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</td>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.lastname}</td>
          <td>${user.email}</td>
        </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});


// import './index.css';
// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`I would say ${courseValue} for this awesome course!`) //eslint-disable-line no-console
