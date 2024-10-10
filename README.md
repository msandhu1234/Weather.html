Display Weather Website

Project Overview
A simple weather display website that fetches a specified city's weather through the WeatherStack API. AJAX is used to asynchronously query the server for results and then display the weather on the webpage. The project will be designed in such a way that there is a clear separation between HTML, CSS, and JavaScript.
Technologies Used
•	HTML
•	CSS
•	JavaScript (with jQuery)
•	AJAX
•	WeatherStack API
Requirements
1.	Visual Studio Code for editing codes.
2.	jQuery library.
3.	WeatherStack API access for weather information.
Getting Started
1.	Signup at WeatherStack and get your API access key.
2.Clone or download the repository into your local system.
3.Open the project folder in VS code.
File Structure
/weather-display-website
|-- index.html
|-- style.css
|-- script.js
How To Run Project
1.	Open index.html with your web browser.
2._Type in a city name in the text area box and submit.
3.	The weather conditions for the city will be displayed in a paragraph below the form area.
Code Explained
index.html
• Carries the layout for the webpage. This includes a header with the label "Weather", a form carrying an input field of type text named 'city', and a result area to display weather data.
style.css
 • Adds style to the web page. Make sure to validate using CSS Validator.
script.js
 • Sends AJAX requests to the WeatherStack API to fetch weather data.
 • Also manages a case when data has fetched successfully and an error case in case it fails to get a response from the API call.
Error Handling
•	 The script will handle errors, providing appropriate messages when the API call fails, such as entering an invalid city name.
Testing
 •	 All HTML should have zero errors and warnings via W3C HTML Validator.
 •	 All CSS should have zero errors and warnings via W3C CSS Validator.
Deployment
 •	 After deployment, provide the URL of where your project is hosted



This is the URL of my website


Citations 

I would like to express my gratitude to everyone who supported me in completing this assignment. Special thanks to my lecturer for their guidance and to the course materials that provided valuable information. I also appreciate the assistance from ChatGPT and Perplexity AI, which helped me gain a better understanding of JavaScript and creating responsive website . As this was my first experience working with APIs, these resources were invaluable in enhancing my learning process. While I utilized AI tools to deepen my understanding, all work submitted is my own, and I am thankful for the support that contributed to my growth in web development.


