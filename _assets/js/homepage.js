function disable(key) {
  var detail = document.getElementById('detail');
  var name = document.getElementById('name');
  if (key === "name") {
    if (name.style.display === "none") {
      name.style.display = "block";
      detail.style.display = "none";
    }
    else {
      name.style.display = "none";
      detail.style.display = "block";
    }
  }

  if (key === "detail") {
    if (detail.style.display === "none") {
      detail.style.display = "block";
      name.style.display = "none";
    }
    else {
      detail.style.display = "none";
      name.style.display = "block";
    }
  }
}
