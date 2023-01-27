/*
* ADD NEW PROJECT:
*   Make image collage of screenshots
*   Make card for project in html
*   Add all info to projects array below
*   Append to html with functions and their placeholders
*
*   NOTE
*   File path is made from project.html page
*   Github repo need to be public
*   Clone repo as submodule to project
*/

$(function() {
    let projects = [
        {
            name:"webpage",
            date: "2022",
            purpose: "studies",
            gitlink: "https://github.com/idamakela/one-webpage",
            alink: "../projects/one-webpage/html/home.html",
            desc: "Responsive portfolio webpage prototype using only HTML and CSS.",
            img: "../projects/images/one-webpage.png"
        },
        {
            name:"jsGame",
            date: "2022",
            purpose: "studies",
            gitlink: "https://github.com/idamakela/two-jsGame",
            alink: "../projects/two-jsGame/html/index.html",
            desc: "Vanilla JS game of Hanged Man made to work through alerts.",
            img: "../projects/images/two-jsGame.png"
        },        {
            name:"responsive Web Game",
            date: "2022",
            purpose: "studies",
            gitlink: "https://github.com/idamakela/three-responsiveWebGame",
            alink: "../projects/three-responsiveWebGame/html/index.html",
            desc: "Responsive web game made with HTML, CSS and JQuery.",
            img: "../projects/images/three-responsiveWebGame.png"
        },        {
            name:"api",
            date: "2022",
            purpose: "studies",
            gitlink: "https://github.com/idamakela/four-api",
            alink: "../projects/four-api/html/index.html",
            desc: "Webpage connected to API using AJAX.",
            img: "../projects/images/four-api.png"
        },
    ];

    appendToCard(".card-1", 0);
    appendToCard(".card-2", 1);
    appendToCard(".card-3", 2);
    appendToCard(".card-4", 3);    

    appendDemoLink(".card-1", 0);
    appendDemoLink(".card-2", 1);
    appendDemoLink(".card-3", 2);
    appendDemoLink(".card-4", 3);

    appendGithubLink(".card-1", 0);
    appendGithubLink(".card-2", 1);
    appendGithubLink(".card-3", 2);
    appendGithubLink(".card-4", 3);    
    

    function appendToCard(card, i) {
        $(card).children(".title").text(projects[i].name);
        $(card).children(".date").text(projects[i].date + " " + projects[0].purpose);
        $(card).children(".desc").text(projects[i].desc);
        $(card).find("img").attr("src", projects[i].img);
    }

    function appendDemoLink(card, i) {
        let target = $(card).find(".demo");
        let path = projects[i].alink;

        $(target).click(function() {
            window.open(path);
        });
    }

    function appendGithubLink(card, i) {
        let target = $(card).find(".github");

        $(target).click(function() {
            window.open(projects[i].gitlink);
        });
    }

    //DROP DOWN MENU, MIN 2 LEVELS
    /*
    * change menu li h4 a items to submenu on click for project 
    *
    *
    *
    */
    $(".menu li").on({
        click: function() {
            $(this).find(".submenu").hide();
        }
    });
});