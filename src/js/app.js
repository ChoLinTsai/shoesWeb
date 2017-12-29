const css = require('../css/app.scss');

// header left view btn
const btnView = document.getElementById('btn-view');

// get header shoe img
const headerViewShoe = document.getElementById('header-view-shoe');

// get view shoe blose btn
const btnViewClose = document.getElementsByClassName('closebtn')[0]

// header view btn click function to show Shoe
btnView.addEventListener('click', () => {
	headerViewShoe.classList.remove('align-out');
	// headerViewShoe.classList.add('active');
});

// header close btn click function to hide Shoe
btnViewClose.addEventListener('click', () => {
	// headerViewShoe.classList.remove('active');
	headerViewShoe.classList.add('align-out');
});
