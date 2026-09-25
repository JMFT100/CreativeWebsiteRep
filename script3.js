const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();
let selectedDate = null;

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default',{month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive" data-date="${prevDate.toDateString()}">${prevDate.getDate()}</div>`;
    };

    for(let i = 1; i<= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML +=`<div class="date ${activeClass}" data-date="${date.toDateString()}">${i}</div>`;
    };

    for(let i = 1; i<= 7 - lastDayIndex; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive" data-date="${nextDate.toDateString()}">${nextDate.getDate()}</div>`;
    };

    datesElement.innerHTML = datesHTML;
}

datesElement.addEventListener('click', (e) => {
    const clicked = e.target.closest('.date');
    if(!clicked) return;
    if (clicked.classList.contains('inactive')) return;

    datesElement.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    const fullDate = new Date(clicked.dataset.date);
    selectedDate = fullDate;


    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdPRidwoEWZM3LXNZ6l3WxeUQsjpgdcX_H1PJLDVIpwl82G5w/formResponse";
    const entryID = "entry.410839760"; 

    const data = new FormData();
    const chosenDate = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`;
    data.append(entryID, chosenDate);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        body: data
    });
    
    window.location.href = "page4.html"; 
});

prevBtn.addEventListener('click', () => {
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();
