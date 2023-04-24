const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard);
    const social = document.getElementById(socialCard);
  
    toggle.addEventListener('click', () => {
      //if the animation class exists , we add the down-animation class
      if(social.classList.contains('animation')){
        social.classList.add('down-animation')

        setTimeout(()=>{
          social.classList.remove('down-animation')
        }, 1000)

      }
      social.classList.toggle('animation');
    });
  };
  
  showSocial('card-toggle', 'card__social');

  

  const cardToggle = document.getElementById('card-toggle');
const cardSocialText = document.querySelector('.card__social-text');

cardToggle.addEventListener('click', () => {
  cardSocialText.classList.toggle('active');
});
