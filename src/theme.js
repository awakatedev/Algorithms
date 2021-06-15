class theme {
  constructor(){
    this.change();
  }

  change() {
    const lbl = document.querySelector(".lbl"),
          btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener("click", this.btnSwitch_click);

    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark");
      lbl.classList.add("active");
      btnSwitch.checked = true;
    } else {
      document.body.classList.remove("dark");
      lbl.classList.remove("active");
      btnSwitch.checked = false;
    }
  }

  btnSwitch_click()
  {
    const lbl = document.querySelector(".lbl");

    lbl.classList.toggle("active");

    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")?
      localStorage.setItem("dark-mode", "true") :
      localStorage.setItem("dark-mode", "false");
  }
}
window.onload = () => new theme();
