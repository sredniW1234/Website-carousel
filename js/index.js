const iframe = document.getElementById("Iframe");
// iframe.sandbox = 'allow-same-origin';

const time_till_rotation = 1;  // Seconds
const website_links = ["https://Emanuel518.github.io", "https://barrya1.github.io", "https://gilbert-bot.github.io", "https://JuanM1112.github.io", "https://Wangel4.github.io", "https://johankisor123.github.io",];
let current_webID = 0;

function set_next_website()
{
    console.log(iframe.src)
    iframe.src = website_links[current_webID];  // Set source
    current_webID = (current_webID + 1) % website_links.length;  // Get next ID

    // Set the year if it is the in between page
    if (website_links[current_webID] === "../html/Year Display.html")
    {
        iframe.document.getElementById("Year").textContent = "2025"
    }
}

set_next_website();

setInterval(set_next_website, time_till_rotation * 1000);  // Multiply time by 1000 to get milliseconds
