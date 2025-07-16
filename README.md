# Fiseanna
A link to my [Repository](https://github.com/Majorkas/Fiseanna) for the project and then

The Website is hosted on github pages [here](https://majorkas.github.io/Fiseanna/).

## Inspirations:
My main inspiration for building this website was my brother Harry and his Partner Ava, Harry being a photographer and Ava enjoying making arts and crafts so why not make them a website to advertise and possibly sell these items so thats what I have began to create for them all of the current items are just advertising prints of photographs Harry has taken as Ava is still in the process of making the items she wants to post on the site. The name came from her Grandparents, Físeanna the Irish word for visions.

## Design:

The font I decided to go for I chose for the main reason of it being a kind of celtic vibe making it match the theme I was trying to go for being Irish made prints and crafts with the motto being 

>Handmade crafts and prints, made with Ireland and its surrounding beauty at the forefront of its creation

this then also influenced the colour choices going for the greens and light colours. 

The main banner image is a beautiful photo my brother took while out walking so I decided to make that the main center piece of the whole site being at the top of every page with the main logo, motto and main nav elements.

## JavaScript:

I have added a few interactive elements to the page using all of the skills learned in the last few weeks in module 2 breaking it down page by page we have

### 1. Universal:

The first of all interactivity I made was the menu button for the main nav element I had no major issues creating this as it was a simple DOM manipulation to toggle the class on both the motto and the actual nav elements to alternate between being hidden and not.

### 2. Index Page: 
This was my first challenge I wanted to create an image gallery with one main image and a few smaller ones that once hovered or focused on with mobile it would swap the smaller image to the main display making it bigger and easier to see, what gave me trouble was I couldnt get the small image to swap I used the forEach to take an array of image id's and srcs and then add event listeners to each for each kind of event I wanted and that seemed to work as i added a console log to display the src of the image i was hovering on and it displayed the correct src for each image my problem was when I then created the imgSwap function I couldnt for the life of me figure out why it wouldn't work but after trouble shooting for a few evenings I realised I had been trying to overcomplicate it completely and finally I realised it was simply just a matter of declaring a const for the main image and then writing the function to take that const and get the src using .src and taking the imgSrc gotten from the hover event listener and applying it to the main image src while being hovered then writing another function to apply the original image src back onto it

### 2.5. Success Page

I had no real challenges to face in the making of this page its a very basic redirect page that once you submit the form on the index it sends you to this page and then onload runs a function that that after 6 ticks it will send the user back to the index page while also displaying a countdown on the page 
```
let count = 6;
function redirectPage() {
  count--;
  document.getElementById('countDown').innerHTML = count;
  if (count == 0) {
    window.location = 'index.html';
  }
}
```

### 3. Store Page:
On the store page in the footer I decided I wanted to make a shipping calculator for the possible customers but for it i didnt want them to have to click a submit button everytime they selected the area they wanted to ship to I wanted it to dynamically update the price and location onto a span as the selection was changed without a submit button my main challenges with this was getting it to do exactly that without a button I thought I had the right code but after many failed attempts it turns out my problem with it was that I had the even listener attached to the drop down input which for some reason when listening for the change event it wasnt working so after trying to change many different thing I finally moved the event listener to look for changes on a div surrounding the drop box which fixed the issue of it not updating when changed a mistake I have now learned from and wont make again.<br>
The fixed listener:
```
document.getElementById('shipping-calculator').addEventListener('change', () => shippingCalcultor(address))
```
 but other than this small problem everything else I managed with ease 

### 3.5. Store Item Pages:

On this page I created a form that when submitted it would dislay the price of a print and gave the options for size and if the user wanted to add a frame for a set price I took some inspiration for this from the ready reckoner code we built in one of our lectures using the outputToSpan function and having one main function that would run everything to give the final result outputting the chosen values into the span element my only issue with this one was trying to get the drop down selection to change the price but I finally fixed it by changing the if else to look for the actual text in each selection of the drop down rather than the value. I enjoyed using the 

```
const FRAME = addFrame ? WITH_FRAME : NO_FRAME;
```
making the code alot shorter rather than having to do another if else.
I then repeated it so that when the user had the add frame selection checked it would swap the main image displaying the item to the framed image and when its not selected it would choose the non framed image.

## Site Map: 
![site map](site-map\site-map-fiseanna.JPG)
---
![index page map](site-map\index-page.JPG)
---
![store page map](site-map\store-page.JPG)
---
![store item page map](site-map\store-item-page.JPG)
---



## Closing Thoughts: 
All in all I had alot of fun building this site and coming up with the different interactive elements and I cant wait to build on my knowledge and continue to build this site to be a fully functioning store for my Brother and his Partner
