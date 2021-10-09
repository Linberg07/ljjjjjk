window.addEventListener('load',windowLoad);

function windowLoad(){
let rowButton = document.querySelectorAll(".content-row__button");
let popupBg = document.querySelectorAll(".popup-bg");
let popupClose = document.querySelectorAll(".popup-close");
let typeBtn = document.querySelectorAll(".type__btn");
let checkbox = document.querySelectorAll(".checkbox");
let video = document.querySelectorAll(".video-play");

for (let i = 0; i < video.length; i++) {
  video[i].addEventListener('click',function() {
    let par = video[i].parentNode;
    let videoId = video[i].getAttribute('data-video');
    par.innerHTML = '<iframe src="//www.youtube.com/embed/' + videoId + '?autoplay=1" scrolling="no" style="width: 100%; height: 330px;" allow="autoplay"></iframe>';
}	);
}

for (let i = 0; i < rowButton.length; i++) {
  rowButton[i].addEventListener('click',function(){
    document.getElementById('popupBtn').classList.add('active');
	document.getElementsByTagName('body')[0].classList.add('lock');
  });
}

for (let i = 0; i < typeBtn.length; i++) {
  typeBtn[i].addEventListener('click',function(){
    document.getElementById('popupType').classList.add('active');
	document.getElementsByTagName('body')[0].classList.add('lock');
  });
}

for (let i = 0; i < popupBg.length; i++) {
  popupBg[i].addEventListener('click',function(){
  	let popup = popupBg[i].parentNode;
  	let allPopup = document.querySelectorAll(".popup");
  	popup.classList.remove('active');
  	document.getElementsByTagName('body')[0].classList.remove('lock');
  });
}

for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener('click',function(){
  	let body = popupClose[i].parentNode;
  	let popup = body.parentNode;

    popup.classList.remove('active');
  	document.getElementsByTagName('body')[0].classList.remove('lock');
  }); 





}






}


