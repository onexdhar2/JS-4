let menuBtn =document.querySelector('.toggleBtn')
let sidebar=document.querySelector('.sideBar')
let cancel=document.querySelector('.cancelBtn')

menuBtn.addEventListener('click', ()=>{    
    sidebar.classList.add('active')
});

const closeSidebar = ()=>{
    sidebar.classList.remove('active')
};

cancel.addEventListener('click',closeSidebar);
sidebar.addEventListener('click',closeSidebar);