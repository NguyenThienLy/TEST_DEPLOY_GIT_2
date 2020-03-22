let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("modal__header__close")[0];
let headerPage = document.getElementsByClassName("header")[0];
let gistHeader = document.getElementById("gistHeader");
let gistContent = document.getElementById("gistContent");

function openModelGist(header, gistId) {
  gistHeader.innerHTML = header;
  headerPage.style.display = "none";

  $.ajax({
    url: `https://gist.github.com/${gistId}.json`,
    type: 'GET',
    dataType: 'jsonp',
    success: (gistdata) => {
      gistContent.innerHTML = gistdata.div;
    },
    error: (err) => {
      gistContent.innerHTML = "Can't not load data from gist";
    }
  });
  modal.style.display = "block";
}

span.onclick = () => {
  modal.style.display = "none";
  gistContent.innerHTML = "";
  headerPage.style.display = "flex";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    gistContent.innerHTML = "";
    headerPage.style.display = "flex";
  }
}