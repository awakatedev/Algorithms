class theme {
  constructor(){
    this.change();
  }

  change() {
    const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener("click", this.btnSwitch_click);

    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark");
      btnSwitch.checked = true;
    } else {
      document.body.classList.remove("dark");
      btnSwitch.checked = false;
    }
  }

  btnSwitch_click()
  {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")?
      localStorage.setItem("dark-mode", "true") :
      localStorage.setItem("dark-mode", "false");
  }
}
window.onload = () => new theme();
