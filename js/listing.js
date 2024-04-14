import { faker } from 'https://esm.sh/@faker-js/faker';
const hoster_name = faker.person.firstName();
const hoster_image = faker.image.urlLoremFlickr({ category: 'maldives' })

let pPar = window.location.search;
let params = new URLSearchParams(pPar);
let codes = params.get("p");


let code_match = all_places.find(place => place.code === codes);

if (code_match) {
    console.log("Code matched!");
} else {
    console.log("Code not found.");
}
let listing_home_main_all_in = document.querySelector(".listing_home_main_all_in")
window.addEventListener("load",()=>{
    listing_home_main_all_in.innerHTML = `
<div class="listing_home_main_all_in_main">
    <div class="listing_home_title_div">
        <h4 class="listing_home_title">${code_match.name}</h4>
    </div>
    <div class="listing_home_title_div_2">
        <h5 class="listing_home_title_sub">${code_match.location}</h5>
        <div class="listing_home_title_share_save_div">
            <div class="listing_home_title_share_in">
                <img src="./img/share.png" alt="" class="listing_home_title_share_img">
                <p class="listing_home_title_share">share</p>
            </div>
            <div class="listing_home_title_share_in">
                <img src="./img/heart.png" alt="" class="listing_home_title_share_img">
                <p class="listing_home_title_share">save</p>
            </div>
        </div>
    </div>
</div>
<div class="listing_home_main_img_div">
    <img src="./img/place/place_blr/${code_match.images[0]}.webp" alt="" class="listing_home_main_img">
</div>
<div class="listing_home_main_info">
    <p class="listing_home_main_info_location">${code_match.name}</p>
<p class="listing_home_main_info_more">${code_match.guests} guests · ${code_match.bedrooms} bedrooms · ${code_match.beds} beds · ${code_match.baths} baths</p>
<div class="listing_home_main_rew">
<img src="./img/star.png" alt="" class="listing_home_main_img_star">
<p class="listing_home_main_info_more_twobold">4.5</p>
<p class="listing_home_main_info_more_two">${code_match.guests + code_match.bedrooms + code_match.beds + code_match.baths + 3} reviews</p>
</div>
<div class="gry_line"></div>
        <div class="listing_home_main_info_hoster_info">
        <div class="listing_home_main_info_hoster_info_div1">
        <img src="${hoster_image}" alt="hosterimg" class="listing_home_main_info_hoster_img">
        </div>
        <div class="listing_home_main_info_hoster_info_div2">
        <p class="listing_home_main_info_hoster_info_div2_text1">Hosted by ${hoster_name}</p>
        <p class="listing_home_main_info_hoster_info_div2_text2">Superhost · 2 years hosting</p>
        </div>
        </div>
<div class="gry_line"></div>
<div class="listing_home_main_info_hoster_info_ico_main">
            <div class="listing_home_main_info_hoster_info_ico">
            <div class="listing_home_main_info_hoster_info_div1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z"></path></svg>
            </div>
            <div class="listing_home_main_info_hoster_info_div2">
            <p class="listing_home_main_info_hoster_info_div2_text1">Dedicated workspace</p>
            <p class="listing_home_main_info_hoster_info_div2_text3">A room with wifi that’s well-suited for working.</p>
            </div>
            </div>

            <div class="listing_home_main_info_hoster_info_ico">
            <div class="listing_home_main_info_hoster_info_div1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 17a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM25.67.33a2 2 0 0 1 2 1.85v6.54a2 2 0 0 1-.97 1.7l-.14.08-9.67 4.84a2 2 0 0 1-1.61.07l-.17-.07-9.67-4.84a2 2 0 0 1-1.1-1.62V2.33a2 2 0 0 1 1.84-2h.15zm0 2H6.33v6.39L16 13.55l9.67-4.83z"></path></svg>
             </div>
            <div class="listing_home_main_info_hoster_info_div2">
            <p class="listing_home_main_info_hoster_info_div2_text1">Tanakan is a Superhost</p>
            <p class="listing_home_main_info_hoster_info_div2_text3">Superhosts are experienced, highly rated Hosts.</p>
            </div>
            </div>

            <div class="listing_home_main_info_hoster_info_ico">
            <div class="listing_home_main_info_hoster_info_div1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path></svg>
            </div>
            <div class="listing_home_main_info_hoster_info_div2">
            <p class="listing_home_main_info_hoster_info_div2_text1">Great check-in experience</p>
            <p class="listing_home_main_info_hoster_info_div2_text3">100% of recent guests gave the check-in process a 5-star rating.</p>
            </div>
            </div>
            </div>
<div class="gry_line"></div>
<p class="listing_home_main_info_location">${code_match.name}</p>

<div class="listing_home_main_4_images">
    <img src="./img/place/place_blr/${code_match.images[1]}.webp" alt="" class="listing_home_main_img_two">
    <img src="./img/place/place_blr/${code_match.images[2]}.webp" alt="" class="listing_home_main_img_two">
    <img src="./img/place/place_blr/${code_match.images[3]}.webp" alt="" class="listing_home_main_img_two">
    <img src="./img/place/place_blr/${code_match.images[4]}.webp" alt="" class="listing_home_main_img_two">
</div>
<div class="gry_line"></div>
<div class="listing_home_main_rew">
<img src="./img/star.png" alt="" class="listing_home_main_img_star">
<p class="listing_home_main_info_more_twobold">4.5</p>
<p class="listing_home_main_info_more_two">${code_match.guests + code_match.bedrooms + code_match.beds + code_match.baths + 3} reviews</p>
</div>


<div class="listing_home_main_info_hoster_info_rews">





</div>
    `


const images = document.querySelectorAll('.listing_home_main_img');
      
images.forEach(image => {
    image.addEventListener('load', ()=> {
    image.src = "./img/place/" + image.getAttribute('src').split('/').pop();
});
});

const images2 = document.querySelectorAll('.listing_home_main_img_two');
      
images2.forEach(image2 => {
    image2.addEventListener('load', ()=> {
    image2.src = "./img/place/" + image2.getAttribute('src').split('/').pop();
});
});
})

  
  


window.addEventListener('load', ()=> {
    let listing_home_main_info_hoster_info_rews = document.querySelector(".listing_home_main_info_hoster_info_rews")
    for (let i = 0; i < 10; i++) {
        const hoster_name = faker.person.firstName()
        const hoster_image = faker.image.urlLoremFlickr({ category: 'people' })
        const reviewContent = faker.lorem.lines(2)
        const fccity = faker.location.country()

        listing_home_main_info_hoster_info_rews.innerHTML +=`
            <div class="listing_home_main_info_hoster_info_resicon">
            <div class="listing_home_main_info_hoster_info_resicon2">
            <div class="listing_home_main_info_hoster_info_div1">
            <img src="${hoster_image}" alt="hosterimg" class="listing_home_main_info_hoster_img">
            </div>
            <div class="listing_home_main_info_hoster_info_div2">
            <p class="listing_home_main_info_hoster_info_div2_text1">${hoster_name}</p>
            <p class="listing_home_main_info_hoster_info_div2_text2_from">${fccity}</p>
            </div>
            </div>
            <div class="listing_home_main_info_hoster_info_div2">
            <p class="listing_home_main_info_hoster_info_div2_text2_form_2">${reviewContent}</p>
            </div>
            </div>
        `


    }
});