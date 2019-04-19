API Documentation

Base URL - https://hoverrobotix.herokuapp.com/api/

Users

    1. Get All Users
        Route - 'users/'
        Method - GET
    
    2. Sign Up 
        Route - 'users/signup'
        Method - POST
        Params - a. username (full Name)
                 b. password
                 c. email
                 d. gender

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
    
    7. Save address
        Route - 'users/address'
        Method - POST
        Params - a. address
                 b. userId

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
    
    2. Add Product
        //form data
        Route - 'products/addProduct/'
        Method - 'POST'
        Params - a. description
                 b. spec
                 c. productName
                 d. productImages (array of images)
                 e. category id
                 f: price
                 
    3. Delete Product 
        Route - 'products/:productId'
        Method - 'DELETE'

    4. Get Products for the specific Category 
        Route - 'products/:categoryId'
        Method - 'GET'
    
    5. Get Details of specific product
        Route - 'products/getDetailsOfProduct/:productId'
        Method - 'GET'

Orders 

    1. Save order to the database
        Route - 'order/'
        Method - 'POST'
        Params - a. order (array)
                 b. userId (id)
                 c. amount (number)
    
    2. Fetch orders for the particular User
        Route - 'order/:userId'
        Method - 'POST'
    
    3. Toggle order status
        Route - 'order/:orderId'
        Method - 'GET'

Contact Form 

    1. Save the Query
        Route - 'contact/'
        Method - 'POST'
        Params - a. name
                 b. subject
                 c. message
                 d. email
    
    2. Get All Querys
        Route - 'contact/'
        Method - 'GET'

Admin 
    1. Signup Admin
        Route - 'admin/'
        Method - 'POST'
        Params - a. username
                 b. email
                 c. password
    
    2. Login Admin  
        Route - 'admin/login'
        Method - 'POST'
        Params - a. email
                 b. password
    
    3. Token verify 
        Route - 'admin/loginVerify'
        Method - 'POST'
        Params - a. email
                 b. token

