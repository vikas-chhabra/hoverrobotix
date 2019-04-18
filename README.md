API Documentation

Base URL - https://hoverrobotix.herokuapp.com/api/

Users

    1. Get All Users
        Route - 'users/'
        Method - GET
    
    2. Sign Up 
        Route - 'users/signup'
        Method - POST
        Params - a. username
                 b. password
                 c. email

    3. Login 
        Route - 'users/login'
        Method - POST
        Params - a. email
                 b. password

    4. Verify Login
        Route - 'users/loginVerify'
        Method - POST
        Params - a. email
                 b. token
    
    5. User Active Toggle
        Route - 'users/:userId'
        Method - DELETE

    6. Get Specific User Details
        Rotue - 'users/:userId'
        Method - GET

Categories

    1. Get All Categories
        Rotue - 'categories/'
        Method - 'GET'
    
    2. Insert a new category
        Route - 'categories/insertCategory'
        Method - 'POST'
        Params - a. categoryName
    
    3. Edit a Already existing Category
        Route - 'categories/:categoryId/:newCategoryName'
        Method - 'GET'

    4. Delete a Category
        Route - 'categories/:categoryId'
        Method - 'DELETE'

Products

    1. Fetch All Products
        Route - 'products/'
        Method - 'GET'