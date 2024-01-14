# Frontend
<details>
<summary>
<span style="font-size: 20px;">Pages and Routes (Views):</span>
</summary>


1. `LogIn/SignUp` Page 
2. `Main / Landing` Page
3. `Individual / Item Display` Page
4. `User Dashboard` Page
5. `Cart and Payment` Page

6. 
    <details>
    <summary>
    <span style="font-size: 16px;"> Main Page (Components / Div):</span>
    </summary>


    1. `Carousel Images` : Component
    2. `List of Products` : Component
    3. `Categories` : Div
    4. `Location and Search` : Component
    5. `Steps to rent` : Div
    6. `Footer` : Component
    </details>



    <details>
    <summary>
    <span style="font-size: 16px;">Individual Page (Components / Div)  :</span>
    </summary>

    1. `Product Image` (1 or more than 1) : Component/Div
    2. `Product Description` : Div
    3. `Select duration` : Button
    4. `Rent This Item` : Button
    5. `Add This To Cart` : Button
    6. `Product Suggestions` : Component/Div
    </details>


    <details>
    <summary>
    <span style="font-size: 16px;">User Dashboard Page (Components / Div)  :</span>
    </summary>

    1. `Private user profile` : Component
    2. `Public user profile` : Component
    </details>


    <details>
    <summary>
    <span style="font-size: 16px;">Cart and Payment Page (Component / Div):</span>
    </summary>

    ### Details have been not specified yet
    </details>

</details>
<br>
<details>
<summary>
<span style="font-size: 20px;">Redux  :</span>
</summary>

1. `Products`
2. `User Profile`
</details>

<br>

# Backend

<details>
<summary>
<span style="font-size: 20px;"> Middlewares :</span>
</summary>

### 1. `Json Web Token (JWT)`: Validation Middleware to check if user is logged in or not
</details>

<br>

<details>
<summary>
<span style="font-size: 20px;"> Get Requests :</span>
</summary>


1. `Main API` : Displays all available rented projects

2. `Individual Product API` : Sends data about the selected item

3. `Cart API` : Sends the Items Added in the cart of an user 

4. `Get User Info API (Private)` : Sends all the data of users to client

5. `Get User Info API (Public)`: Sends Only the Items that the user has uploaded to Rent and details about em
</details>


<br>


<details>
<summary>
<span style="font-size: 20px;">Post Requests :</span>
</summary>


1. `Upload Items API` : Users uploads data and images of an Item to rent out and make money

2. `Sign Up API` : Sign Up new users

3. `Log In API` : Log In already registered Users

4. `Rent this Item API` : Rent selected Items and Updates the status of that Item in `database`

</details>


<br>

<details>
<summary>
<span style="font-size: 20px;">Update Requests :</span>
</summary>


1. `Edit User Details API ` : Update the User Details 
</details>

<br>

<details>
<summary>
<span style="font-size: 20px;">Delete Requests : </span>
</summary>


1. `Remove Item to Rent` : removes the item from `database` and updates the list of items
</details>

<br>

<details>
<summary>
<span style="font-size: 20px;">Notification Mails :</span>
</summary>


1. `Confirmation mail for uploaded Item` : Mail to Confirm that items has been uploaded on the website and available to rent.

2. `Item has been selected to rent` : Mail to let user know that his uploaded items has been rented by someone and delivery boy will be there for pick up

3. `Rented Item Confirmation mail` : Items has been rented and on its way to your doorsteps 

4. `Rented Items has to be returned mail` : To let user know that the Item's duration is about to expire

5. `Item is one its way back` : Notify users who put item to rent know that items is come back again to them. 
</details>

<br>

<details>
<summary> 
<span style="font-size: 20px;">Database :</span>
 </summary>
 <div align="left">

### 1. User's Details : 
1. `User name` : String
2. `Address` : String
3. `Email` : String
4. `Cart` : Array
5. `Rental Items` : Array
7. `Profile pic` : String (if it breaks down in binary)


### 3. Item : Array (Containing all objects of individual items)
1. `Item Name` : String
2. `Item Image` : String
3. `Item Description` : String
4. `Item's Rate` : Numbers / Integers
5. `Category` : String
6. `Dimensions` : String (If applicable)


### 2. Items List : (Won't be stored in actual database, it's Query for main api)
1. `Item Name` : String
2. `Item Image` : String (if it breaks down in binary)
5. `Category` : String
 </div>
</details>