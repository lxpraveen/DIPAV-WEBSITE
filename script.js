
const toast=document.getElementById('toast');
function showToast(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.toast)));
const menuBtn=document.getElementById('menuBtn'),mobile=document.getElementById('mobileMenu');
if(menuBtn&&mobile) menuBtn.addEventListener('click',()=>mobile.classList.toggle('open'));
document.querySelectorAll('#newsletter,#contactForm').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();showToast('Thank you — this form will be connected to your real email/WhatsApp service next.');form.reset()}));
