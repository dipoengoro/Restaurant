var drawerBtnElement = document.getElementById("drawer-btn");
var mobileDrawerElement = document.getElementById("mobile-drawer");
function toggleDrawer() {
    mobileDrawerElement.classList.toggle("open");
}
drawerBtnElement.addEventListener("click", toggleDrawer);
