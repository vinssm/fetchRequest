// var requestUrl = 'https://randomuser.me/api/?results=5'

// fetch(requestUrl)
// .then(function(response){
//     return response.json();
// })

// .then(function(data){
//     console.log(data)
// })


// Promise is new addition to Java Script! Note that Promises have a method called then(). This method is called when the Promise has been fulfilled.

var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // Replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/octocat/repos';

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);