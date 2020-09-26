const navMenu = () => {
  const smallWidthScreen = 576;

  const menuLinkArr = document.querySelectorAll('#navMenu')

  if(document.body.clientWidth > smallWidthScreen) {
    menuLinkArr.forEach((link,i) => {
      link.addEventListener('click',handleOpenNav.bind(this,i))
    })
  } else {
    menuLinkArr.forEach((link,i) => {
      link.removeEventListener('click',handleOpenNav);
    })
  }

  const optionsArr = document.querySelectorAll('#option');
  optionsArr.forEach(option => {
    option.addEventListener('click',handleSelectOption)
  })

}

const handleOpenNav = (i,e) => {
  const menuList = document.getElementById(`navSubMenu${i+1}`);
  menuList.classList.toggle('navMenu__subMenu--open');
  menuList.classList.toggle('navMenu__subMenu--close');
  
  e.currentTarget.classList.toggle('navMenu__item--arrowTop');
  e.currentTarget.classList.toggle('navMenu__item--arrowBot');
}

const handleSelectOption = (e) => {
  const optionsArr = document.querySelectorAll('#option');
  optionsArr.forEach(option => {
    option.classList.remove('navMenu__text--active')
  })

  e.currentTarget.classList.toggle('navMenu__text--active')
  
}