
let imgBox=document.getElementById("imgbox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrtext");

function generateQr(){
  qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
  imgBox.classList.add("show-img")

}
