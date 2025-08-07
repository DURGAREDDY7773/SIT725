const addCards = (items) => {
  const cardSection = document.getElementById("card-section");
  cardSection.innerHTML = ""; // Clear existing cards
  items.forEach(item => {
    const cardHTML = `
      <div class="col s12 m4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p class="card-text" style="color: black;">${item.description}</p>
          </div>
        </div>
      </div>`;
    cardSection.innerHTML += cardHTML;
  });
};

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const showLoader = () => {
  $('#loader').fadeIn();
  setTimeout(() => $('#loader').fadeOut(), 2000);
};

const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('.tooltipped').tooltip();
  $('.fixed-action-btn').floatingActionButton();
  $('.collapsible').collapsible();

  $('#clickMeButton').click(() => clickMe());

  showLoader();
  getProjects(); // Load projects from MongoDB
});
