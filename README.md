API Documentation

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