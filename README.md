# Project Title: Cars Land 
   - A latest cars toys can be found

# Live Preview: https://cars-land.web.app/ 




## Main Requirements

- **Visual Appeal:**
  - Mainly Focus on making the website visually appealing with a pleasing color contrast and a little animated design
  

- **Navbar and Footer:**
  - All page have navbar and footer consistent across all pages, except the 404-page.
  
  - The navbar include the website logo as Cars Land and the following links: Home, All Toys, My Toys, Add A Toy, Blogs and User profile picture if have.
  - Conditionally showing the User profile picture, Add A Toy, and My Toys links based on the user's login status.
  - Displayed user's name when hovering over the profile picture, if available.

- **Login & Registration Systems:**
  - Displayed relevant error messages on the Registration and Login pages when necessary.
  - **Login Page:**
    - Provide fields for Email/Password.
    - Offer Google, Github Sign-in option.
    - Include a link to redirect users to the registration page.
  - **Registration Page:**
    - Include fields for Name, Email, Password, and Photo URL.

- **Home Page:**
  - **Banner Section:**
    - Create a banner section to grab users' attention.
    - **Why Choose Our Website Section:**
    - Display some great information for why should choose our website as shopping.
  - **Shop by Category:**
    - A tab system for displaying sub-categories.
    - Each tab contain more then 3 toys with their picture, name, price, rating, and a "View Details" button.
    - Without Login Display a message and redirect to the login page if a non-logged-in user clicks the "View Details" button.
    - **Gallery Section:**
    - Display attractive and relevant pictures and every reload all img is changed
    - **New Arrive Section:**
    - Create a New Arrive section with little hover effect where data every re-load new items changed because it takes 5 random value.

- **Blogs Page:**
  - There is a Blog page where can be shown some FAQ

- **All Toys Page:**
  - All toys display tabular form.
  - Include columns for Seller (if available), Toy Name, Sub-category, Price, Available Quantity, and "View Details" button.
  - Show data 20 results using the "limit" option.
  - A search system based on the Toy name, sellerName and sub-Category.
  - Redirect non-logged-in users to the login page when clicking the "View Details" button.

- **Single Toy Details:**
  - A private route accessible after successful login.
  - Display toy information, including picture, toy name, seller name, seller email, price, rating, available quantity, and detailed description.
  - User can Sort items with Price

- **Add A Toy Page:**
  - A private route accessible after successful login.
  - Include a form with fields for the picture URL of the toy, Name, Seller name, Seller email, Sub-category,

- **Add A Toy Page:**
  - A User can update his toys info if he/she login to the website and if user has any Toys