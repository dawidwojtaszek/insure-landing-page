const app = () => {
  const handleClick = (e) => {
    e.target.classList.toggle("open");
    const navigation = document.querySelector(".navigation");
    navigation.style.display = "flex";
    navigation.classList.toggle("hide");
    e.preventDefault();
  };
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", handleClick);
};

//app init
app();
