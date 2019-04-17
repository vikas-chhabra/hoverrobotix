API Documentation

Base URl - https://hoverrobotix.herokuapp.com

Users

    1. Get All Users
        Route - '/api/users/'
        Method - GET
    
    2. Sign Up 
        Route - '/api/users/signup'
        Method - POST
        Params - a. username
                 b. password
                 c. email

    3. Login 
        Route - 'api/users/login'
        Method - POST
        Params - a. email
                 b. password

    4. Verify Login
        Route - 'api/users/loginVerify'
        Method - POST
        Params - a. email
                 b. token
    
    5. User Active Toggle
        Route - 'api/users/:userId'
        Method - DELETE

    6. Get Specific User Details
        Rotue - 'api/users/:userId'
        Method - GET

Categories

    1. Get All Categories
        Rotue - '/api/categories/'
        Method - 'GET'
    
    2. Insert a new category
        Route - 'api/categories/insertCategory'
        Method - 'POST'
        Params - a. categoryName
    
    3. Edit a Already existing Category
        Route - 'api/categories/:categoryId/:newCategoryName'
        Method - 'GET'