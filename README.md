# Tranquility

Tranquility is an innovative platform designed to streamline your video streaming experience. Below are the steps to set up your development environment and guidelines for contributing to this project.

## Development Setup
Follow these steps to start contributing:

1. Open your terminal and navigate to your desired working folder.
2. Clone the repository: `git clone https://github.com/NehaMadnani/Tranquility.git`
3. Change directory: `cd Tranquility`
4. Begin crafting your awesome code!

## Merging Changes
To merge your changes into the main project, follow these steps:

1. Create a new branch: `git branch -b your_branch_name`
2. Implement your amazing changes.
3. Commit your changes: `git commit -m "Your descriptive commit message"`
4. Push to the branch: `git push`
5. Open a new Pull Request (PR).
6. In the PR, describe your changes and their impact.
7. If your changes involve UI updates, attach screenshots.
8. Assign the PR for review to a team member.
9. After incorporating review feedback, merge your PR.

## Contribution Notes
- Avoid force-pushing (`git push -f`).
- Regularly rebase your branch with the `MASTER` branch.
- Direct commits or pushes to the `MASTER` branch are prohibited.
- Write test cases with the `.spec.js` file extension.

## Technical Pre_requisites to setup backend:
1. PostgreSQL 16
2. PgAdmin for PostgreSQL GUI
3. Node : v16.20.2
4. npm : 8.19.4

## Database Setup:
1. Assuming that postgreSQL 16 and PgAdmin is installed on you PC, open the pgAdmin GUI
2. In pgAdmin server, create a Database with name: `tranquilityDatabase`
3. Right click on the tranquilityDatabase DB in PgAdmin, and choose queryTool
4. In queryTool paste the SQL query present in file: `tablesMigration.sql` and click on Execute/Refresh option.
5. tranquilityDatabase is now created and setup with the required tables
6. Double check with database properties mentioned below and make necessary changes accordingly in `tranquility-backend-v1/index.js`  
            `host: 'localhost'`
            `database: 'tranquilityDatabase'`
            `user: 'tranquilityAdmin'`
            `password: 'tranquilityAdmin'`
            `port: 5433`
8. Insert/create few user before you proceed with any other tasks. Refer Postman collection `Create User` and create users with different email addresses.

## To start the backend application server:
1. In terminal go to `tranquility-backend-v1` folder 
2. Install dependencies : `npm i` (Skip this step if already installed)
3. To start the server: `npm start` (Application by default starts on port: 3000)

## Routes

- GET  /users
    This route fetches all the existing users
- POST  /users 
    This route used to create a user
    Note: field email is UNIQUE and hence duplicates are not allowed. Use different email value for every new request
    Refer: Postman Collection's `Create User /users`

- POST  /questionnaire
    This route is used to set the questionnaire for exisiting users
    Refer: Postman Collection's `Questionnaire /questionnaire`

- POST  /userinteractionfeedback
    This route is used to set the user interaction feedback for the media files
    Refer: Postman Collection's `Media Feedback /userinteractionfeedback`
    
## Test Cases
Explore our detailed test cases to understand the functionalities better:


- [Video Genre Mapping Test Case](https://github.com/NehaMadnani/Tranquility/blob/main/videoGenreMapping.spec.js): This test case focuses on the mapping of video genres within the application.
- [Show Video Test Case](https://github.com/NehaMadnani/Tranquility/blob/main/showVideo.spec.js): It tests the functionality related to displaying videos.
- [Profile Update Test Case](https://github.com/NehaMadnani/Tranquility/blob/main/profileUpdate.spec.js): This ensures that user profile updates are handled correctly.
- [My Video ID Test Case](https://github.com/NehaMadnani/Tranquility/blob/main/myvideoid.spec.js): Tests the retrieval of video IDs for user-specific content.
- [Tranquility Backend Routes Test Case](https://github.com/NehaMadnani/Tranquility/blob/main/tranquility-backend-v1/routes.test.js): This test case is essential for ensuring the robustness and reliability of backend routes.


Each test case is crafted to ensure that every aspect of Tranquility meets our high standards for quality and functionality. We encourage contributors to familiarize themselves with these tests to understand the core features and to assist in maintaining the integrity of the Tranquility platform.

Join us in enhancing the Tranquility platform and creating an exceptional user experience!
