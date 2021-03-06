# Birdie_technical_test
My solution for Birdie's internship hiring test. 
The goal of this exercise is to create a small web application that visualizes database data.
Application should allow to select a column (amongst demographic data), then display, for each different value in this column, number of lines with this value, and "age" value average. Values must be sorted by decreasing order. 

## Setup & start
### Back-end
In the back/ folder :
* Copy config.template.json into a new file config.json and fill in database's connexion informations
* Run the following to start the express server :
```bash
yarn 
yarn start
```
* The console should log "Connection to database has been established successfully."

### Front-end
In the front folder, run :
```bash
yarn 
yarn start
```

## Architecture
The React-Redux front-end requests the Node-Express back-end for data. 
The Express server fetches the informations in the database.

When the application starts, the list of all the variables is fetched. Then, when the user selects a variable, the corresponding data is fetched and stored in the Redux application state to be displayed. The data for a specific variable is only fetched once.

Here is an overview of the application's Redux state shape :
```js
{
    selectedVariable: "education",
    selectedNRows: 10,
    data: {
        isLoading: false,
        education: {
            n_total_lines: 17,
            education_data
        }
        "class of worker": {
            n_total_lines: 17,
            class_of_worker_data
        } 
    }
}
```
education_data, class_of_worker_data are two-dimentional arrays corresponding to the table rows and colums (variable, count, average age). n_total_lines is the total number of different values for the corresponding variable in the database.
