Great work, Ida! You have clearly show you know what you are doing.

I've provided some feedback on individual things below, please review.

Feel free to fix theme things, but you have already achieved a VÄLGODKÄNT grade so there is no need to update the project for re-assessment.

Well done!

*************************************

CRITERIA FOR GRADING

*************************************


GODKÄNT:
-------------------------------------

3 separate pages: ✅

A header with a page title on every page: ✅
  Note: These should be an <h1> You've used an <h1> fr th home link, but for SEO purposes each page should have an unique <h1> to score higher in google rankings

A navigational menu every page with links to the other pages: ✅

Contact form:
    Email: ✅
    Message:✅
    Required:✅
    Mail to:✅
  Note: you added a required phone number which wasn't in the assigment specs so should not have been required. 

RWD:
    Desktop: ✅
    Mobile: ✅

External CSS: ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Current page indication in the menu: ❌
   What I want to see here is an indication in the NAVIGATIONAL MENU of the current page. Something like If I am on the "Projects" page the menu item "Projects" should a) Look different with an underline, or different font colours and b) not be a link - since I am already on "Projects" if I click on "Projects" nothing should happen.

   From the assignment specs: "An indication of which menu item the user is currently on" - perhaps I needed to make that clearer?


Responsive Image: ✅
    +1 for the image alts

RWD:
  Media Query: ✅
      600 is a little unusual, but if works! General 991px will separate the viewports into tablet portrait and moble / tablet landscape and desktop
  Flex/Grid: ✅

Separate CSS: 
  Semantic: ✅
     You don't need the style- in the file names, and generally the css dir is called "styles" but thats just personal preference
     style-projects.css is empty and should be deleted
     Not requireded for this project, but your understanding and use of css variables is excellent.
     Great use of rem, shows reeal understanding

Semantic Element naming: ✅
  box-1 & box-2 could perhaps be box-image & box-text - soomethng that tells me why 1 and 2 are diffrent

Code Style:
  HTML: ✅
  CSS: ✅
    Not requireded for this project, but your understanding and use of css variables is excellent.
    Great use of rem, shows reeal understanding
    style-contact.css - the indenting in thhe media query is a little off
    After declaring a media query you don't need an empty line:
    @media ... {
      .element {
        ...
      }

      .element2 {
        ...
      }
    }