document.addEventListener('DOMContentLoaded', () => {
  let ButtonToggle = document.getElementsByClassName('navbar-toggler');
  let ListToggle = document.getElementsByClassName('dropdown-toggle');

  let DropDownMenu = () => {
    for (let i = 0; i < ButtonToggle.length; i++) {
      console.log(ButtonToggle[i]);
      ButtonToggle[i].addEventListener('click', () => {
        let DropDownContainer = ButtonToggle[i].nextElementSibling;
          if (DropDownContainer.style.display === 'block') {
              DropDownContainer.style.display = 'none';
          } else {
              DropDownContainer.style.display = 'block';
          }
      });
    }
  };

  let DropDownList = () => {
    for (let i = 0; i < ListToggle.length; i++) {
      console.log(ListToggle[i]);
      ListToggle[i].addEventListener('click', () => {
        let ListDropWrapper = ListToggle[i].nextElementSibling;
        if (ListDropWrapper.style.display === 'block') {
          ListDropWrapper.style.display = 'none';
        } else {
          ListDropWrapper.style.display = 'block';
        }
      });
    }
  };

  DropDownList();
  DropDownMenu();
});
