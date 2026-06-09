let numberOfItems = '';
document.getElementById("num").innerText = 1;


function showSidebar (){
    const sidebar = document.querySelector ('.sidebar');
    sidebar.style.display = 'flex';
}

function closeSidebar (){
    const sidebar = document.querySelector ('.sidebar');
    sidebar.style.display = 'none'
}