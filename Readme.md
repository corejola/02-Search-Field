## 02 - Search Field

Application is running on [https://search-field-02.herokuapp.com/](https://search-field-02.herokuapp.com/)

To run locally: run the following commands:
    
    `npm install`
    `npm run search-install`
    `npm run dev`

To set up MongoDB locally, update the mongoURI variable located in './server/config/db.js' to local mongo uri.

### Search Field Scope
1. Simple webpage to Display data from (~1Mil rows of data)
    - data loads on React componentDidMount
    - Host webpage on Heroku
2. Display all data
3. Provide a search field with live updating
4. Update search results with each character entered
5. MongoDB Database utilized
    - MongoDB Atlas used for webpage

### Express/Mongodb - Atlas
Express & Mongodb Atlas utilized to handle the fake data for the queries
1. Database - Mongodb Atlas
2. Seed with dummy data - mockaroo animal schema.json, imported into mongodb atlas
3. Simple - Express api http routes
    - find all
    - find all by parameter/query
4. 

### Assumptions & Limitations
1. Webpage hosted on heroku
2. Use Dummy data
    - Free dummy api data yields only 1000 rows of data
    - Downloaded .json, will utilize a mongoDB and run queries using mongoose
    - Fake API
3. HTTP requests will handle getting the data from mongodb atlas
4. Backend API will have query
5. Get request by url params, utilized mongoose aggregate and regex to handle queries
 


