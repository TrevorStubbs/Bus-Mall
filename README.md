# Bus Mall
## Overall Requirements
- Build an app that displays potential products to individuals in a focus group. (3 products at a time, side-by-side)
    - Will need to manage the size and aspect ratio of each image.
- Purpose:
    - Have users choose which product, of the 3 displayed, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.
- Do not allow the totals to be shown until there have been a total of 25 selections made.
- Data:
    - Total number of clicks
    - percentage of times that item was clicked when it was shown.
        - Need to keep track of how many times the item was shown

  
## Day 1 Requirements
1. As a user, I would like to display 3 unique products by chance so that the viewers can pick a favorite.---
    - Create a constructor func that creates an object associated with each product and hast the following properties.---
        - Name of product ---
        - file path of image ---
    - Create an algorithm that will randomly generate 3 unique product images from the images directory and display them side by side ---
    - attach an event listener to the section of the HTML page where the images are going to be displayed ---
    - once the users 'click' a product, generate 3 new products for the user to pick from. (Don't repeat any of the last 3 images)
1. As a user, I would like to track the selections made by the viewers so that I can determine which products to keep for the catalog.
    - In the constructor define a property to hold the number of times a product has been clicked.---
    - after every selection by the view, update the newly added property to reflect if it was clicked.---- 
1. As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration---
    - By default, the user should be presented with 25 rounds of voting before ending the session.---
    - Keep the number of round in a variable to allow the number to be easily changed for debugging and testing purposes.---
1. As a user, I would like to view a report of results after all rounds of voting have concluded so that  I can evaluate which products were the most popular.
    - Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered. 
    - After voting round have been completed, remove the event listener on the product.
    - Display the list of all products followed by the votes received and the number of times seen for each. IE `{Banana Slicer} had {3} votes and was shown {5} times.`

# Day 2 - Requirements

- Update the algorithm to randomly generate 3 unique product images from the images directory---
- Update the algorithm so that the new products are generated, confirm that these products are not duplicates from the immediate previous set.---

- Using ChartJS (from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (`<canvas>`)
- Place the bar chart in a `<section>` beneath your three product images
- The bar charts should only appear after all voting data has been collected. 