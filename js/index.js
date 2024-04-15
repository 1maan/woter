
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});
const search_al = document.querySelector(".main_top_nav_bottom_search_all")
const main_top_nav_bottom_search_div_one = document.querySelector(".main_top_nav_bottom_search_div_one")
const main_top_nav_bottom_search_div_two = document.querySelector(".main_top_nav_bottom_search_div_two")
const main_top_nav_bottom_search_div_four = document.querySelector(".main_top_nav_bottom_search_div_four")

let search_al_ser = true;
let div_one_ser = true;
let div_two_ser = true;
let div_four_ser = true;

    const profilecheckbox = document.querySelector(".main_top_nav_bar_three_profile_btn_drop_div_avt")
    const whereDropCheckbox = document.querySelector('.main_top_nav_bottom_search_all_dropdown_where_drop');
    const checkinDropCheckbox = document.querySelector('.main_top_nav_bottom_search_all_dropdown_checkin_drop');
    const whoDropCheckbox = document.querySelector('.main_top_nav_bottom_search_all_dropdown_who_drop');

    whereDropCheckbox.addEventListener('change', function() {
        if (this.checked) {
            checkinDropCheckbox.checked = false;
            whoDropCheckbox.checked = false;
            profilecheckbox.checked = false;
        }
    });

    checkinDropCheckbox.addEventListener('change', function() {
        if (this.checked) {
            whereDropCheckbox.checked = false;
            whoDropCheckbox.checked = false;
            profilecheckbox.checked = false;
        }
    });
    
    whoDropCheckbox.addEventListener('change', function() {
        if (this.checked) {
            checkinDropCheckbox.checked = false;
            whereDropCheckbox.checked = false;
            profilecheckbox.checked = false;
        }
    });

    profilecheckbox.addEventListener('change', function() {
        if (this.checked) {
            checkinDropCheckbox.checked = false;
            whereDropCheckbox.checked = false;
            whoDropCheckbox.checked = false;
        }
        main_top_nav_bottom_search_div_one.classList.remove("searchbtn_active")
        div_one_ser = true
        main_top_nav_bottom_search_div_two.classList.remove("searchbtn_active")
        div_two_ser = true
        main_top_nav_bottom_search_div_four.classList.remove("searchbtn_active")
        div_four_ser = true
        search_al.classList.remove("backgbsearch")
    });




    main_top_nav_bottom_search_div_one.addEventListener("click",()=>{
        main_top_nav_bottom_search_div_two.classList.remove("searchbtn_active")
        div_two_ser = true
        main_top_nav_bottom_search_div_four.classList.remove("searchbtn_active")
        div_four_ser = true
        if(div_one_ser){
            main_top_nav_bottom_search_div_one.classList.add("searchbtn_active")
            search_al.classList.add("backgbsearch")
        }else{
            main_top_nav_bottom_search_div_one.classList.remove("searchbtn_active")
            search_al.classList.remove("backgbsearch")
        }
        div_one_ser =! div_one_ser
    })


    main_top_nav_bottom_search_div_two.addEventListener("click",()=>{
        main_top_nav_bottom_search_div_one.classList.remove("searchbtn_active")
        div_one_ser = true
        main_top_nav_bottom_search_div_four.classList.remove("searchbtn_active")
        div_four_ser = true
        if(div_two_ser){
            main_top_nav_bottom_search_div_two.classList.add("searchbtn_active")
            search_al.classList.add("backgbsearch")

        }else{
            main_top_nav_bottom_search_div_two.classList.remove("searchbtn_active")
            search_al.classList.remove("backgbsearch")
        }
        div_two_ser =! div_two_ser
    })

    
    main_top_nav_bottom_search_div_four.addEventListener("click",()=>{
        main_top_nav_bottom_search_div_one.classList.remove("searchbtn_active")
        div_one_ser = true
        main_top_nav_bottom_search_div_two.classList.remove("searchbtn_active")
        div_two_ser = true
        if(div_four_ser){
            main_top_nav_bottom_search_div_four.classList.add("searchbtn_active")
            search_al.classList.add("backgbsearch")
        }else{
            main_top_nav_bottom_search_div_four.classList.remove("searchbtn_active")
            search_al.classList.remove("backgbsearch")
        }
        div_four_ser =! div_four_ser
    })
    



    const images_filter = document.querySelector(".main_search_bottom_filter_all_types_div_all_images_filter")

    window.addEventListener("DOMContentLoaded",()=>{
        places.map((placs)=>{
            images_filter.innerHTML += `
            <div class="main_search_bottom_filter_all_types_div_all_images_filter_div">
            <img src="${placs.img}.jpg" alt="" class="main_search_bottom_filter_all_types_div_all_images">
            <p class="main_search_bottom_filter_all_types_div_all_images_text ">${placs.name}</p>
            <div class="main_search_bottom_filter_all_types_div_all_images_filter_div_bottom_active_line">
            </div>
            </div>
            `
        })
    })



    const scroll_button_right = document.querySelector(".main_search_bottom_filter_all_types_div_all_button_right")
    
    scroll_button_right.addEventListener("click",()=>{
        const scrollAmount = images_filter.scrollWidth / 3;
        const currentScrollLeft = images_filter.scrollLeft;
        const newScrollLeft = currentScrollLeft + scrollAmount;
        images_filter.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth' 
        });
    })


    const scroll_button_left = document.querySelector(".main_search_bottom_filter_all_types_div_all_button_left")
    
    scroll_button_left.addEventListener("click",()=>{
        const scrollAmount = images_filter.scrollWidth / 3;
        const currentScrollLeft = images_filter.scrollLeft;
        const newScrollLeft = currentScrollLeft - scrollAmount;
        images_filter.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth' 
        });
    })

const all_places_filters_m = document.querySelector(".all_places_filters-imgs-in")

window.addEventListener("DOMContentLoaded",()=>{
    let date = new Date;
    let topday_date = date.getDate();
    let topday_month = date.getMonth()+1;
    if(topday_date > 26){
        topday_date = 1
        topday_month++
    }
    all_places.map((plc)=>{
        all_places_filters_m.innerHTML += `
        <div class="all_places_filters_main_div_als_main">
        <div class="all_places_filters_main_div_als">
            <div class="all_places_filters_img_slider_left_btn">
                <img src="./img/expand-arrow-left.png" alt="expand left icon" class="main_search_bottom_filter_all_types_div_all_button_left_img_two">
            </div>
            <div class="all_places_filters_img_slider">
                <img src="./img/place/80/${plc.images[0]}.webp" alt="" class="all_places_filters_main_div_img">
                <img src="./img/place/80/${plc.images[1]}.webp" alt="" class="all_places_filters_main_div_img">
                <img src="./img/place/80/${plc.images[2]}.webp" alt="" class="all_places_filters_main_div_img">
                <img src="./img/place/80/${plc.images[3]}.webp" alt="" class="all_places_filters_main_div_img">
                <img src="./img/place/80/${plc.images[4]}.webp" alt="" class="all_places_filters_main_div_img">
            </div>
            <div class="all_places_filters_img_slider_right_btn">
                <img src="./img/expand-arrow-right.png" alt="expand right icon" class="main_search_bottom_filter_all_types_div_all_button_right_img_two">
            </div>
        </div>
    <div class="all_places_filters_img_slider_title_div">
    <a href="./listing.html?p=${plc.code}">
        <p class="all_places_filters_img_slider_title">${plc.location}</p>
        <p class="all_places_filters_img_slider_km">${plc.guests} kilometers away</p>
        <p class="all_places_filters_img_slider_km">${months[topday_month-1].slice(0, 3)} ${topday_date} - ${topday_date+4}</p>
        <p class="all_places_filters_img_slider_title">$${plc.price} night</p>
    </a>
    </div>
        </div>

        `
        const images = document.querySelectorAll('.all_places_filters_main_div_img');
  
  images.forEach(image => {
    image.addEventListener('load', function() {
      image.src = "./img/place/81/" + image.getAttribute('src').split('/').pop();
    });
  });
    })

    const all_places_filters_main_div_img = document.querySelectorAll(".all_places_filters_main_div_img")
window.addEventListener("load",()=>{
    all_places_filters_main_div_img.forEach(all_places_filterimg => {
        all_places_filterimg.classList.add("all_places_filters_main_div_img_sctive")
   
    });
})

const all_places_filters_img_slider_left_btn = document.querySelectorAll(".all_places_filters_img_slider_left_btn");

all_places_filters_img_slider_left_btn.forEach(img_slider_left_btn => {
    img_slider_left_btn.addEventListener('click', function() {
        let sliderContainer = this.parentElement.querySelector(".all_places_filters_img_slider");
        if (sliderContainer) {
            const scrollAmount = sliderContainer.scrollWidth / 5;
            const currentScrollLeft = sliderContainer.scrollLeft;
            const newScrollLeft = currentScrollLeft - scrollAmount;
            sliderContainer.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth' 
            });
        }
    });
});


const all_places_filters_img_slider_right_btn = document.querySelectorAll(".all_places_filters_img_slider_right_btn");

all_places_filters_img_slider_right_btn.forEach(img_slider_right_btn => {
    img_slider_right_btn.addEventListener('click', function() {
        let sliderContainer = this.parentElement.querySelector(".all_places_filters_img_slider");
        if (sliderContainer) {
            const scrollAmount = sliderContainer.scrollWidth / 5;
            const currentScrollLeft = sliderContainer.scrollLeft;
            const newScrollLeft = currentScrollLeft + scrollAmount;
            sliderContainer.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth' 
            });
        }
    });
});
})



let main_login_pop = document.querySelector(".all_float_div_login_bg")
let signupbnt_login = document.querySelectorAll(".signupbnt_login")
let spacegivclose = document.querySelector(".spacegivclose")
signupbnt_login.forEach(signupbnt_log => {
    signupbnt_log.addEventListener("click",()=>{
        main_login_pop.style.display = "flex"
    })
});
spacegivclose.addEventListener("click",()=>{
    main_login_pop.style.display = "none"
})