window.addEventListener("scroll", function() {
    var navpost = document.querySelector(".navpost-sticky"); //on cible le navpost-sticky
    var scrollposition = window.scrollY; //on creer une variabe
    var windowheight = window.innerHeight;
    var threshold = windowheight * 0.3; // 30% of the window height
  
    if (scrollposition > threshold) {
      navpost.classList.add("show");
    } else {
      navpost.classList.remove("show");
    }
  });

const divQuestions = document.querySelectorAll('.divquestion');

  divQuestions.forEach(div => {
    const bouton = div.querySelector('.bouton2');
    const contenu = div.querySelector('.contenu');
  
    bouton.addEventListener('click', function() {
      contenu.classList.toggle('visible');
      bouton.classList.toggle('active');
      if (bouton.classList.contains('active')) {
        bouton.querySelector('.croix').textContent = '-';
      } else {
        bouton.querySelector('.croix').textContent = '+';
      }
    });
  });
  
let mybutton = document.getElementById("scroll");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


// quand l'utilisateur clique sur le bouton il scrolle vers le bas
function topFunction() {
  document.body.scrollbottom = 0;
  document.documentElement.scrollbottom = 0;
}

const scrollDownBtn = document.querySelector('.arrow-down');

scrollDownBtn.addEventListener('click', () => {
	window.scroll({
		top: 620,
		behavior: 'smooth'
	});
});