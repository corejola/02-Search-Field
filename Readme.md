## 02 - Search Field

### Search Field Scope
1. Simple webpage to Display data from (~1Mil rows of data)
    - data loads on React component load
2. Display all data
3. Provide a search field with live updating
4. Update search results with each character entered
5. Simple Database utilized

### Express/Mongodb - Atlas
Express & Mongodb Atlas utilized to handle the fake data for the queries
1. Database - Mongodb Atlas
2. Seed with dummy data - mockaroo animal schema.json, imported into mongodb atlas
3. Simple - Express api http routes
    - find all
    - find all by parameter/query
4. 

### Assumptions & Limitations
1. Use Dummy data
    - Downloaded .json, will utilize a mongoDB and run queries using mongoose
    - Fake API
2. HTTP requests will handle getting the data from mongodb atlas
3. API will have query
4. Get request by url params, utilized mongoose aggregate and regex to handle queries
5. Dummy api data yields up to 1000 rows of data


