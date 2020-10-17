Front-end Test Project for VodafoneGR

This project was built using React.js with the create-react-app boilerplate
For styling plain CSS3 was used (no libraries/frameworks).

# Third-party libraries used in the project:
  
  query-string for url params parsing
  react-responsive-carousel for the header carousel
  rc-slider for the sliders on section 2
  react-tabs for the section tabs on homepage
  
 # How to run the project
 
 npm install 
 npm start
 
 # Some notes on the project
 
 Concerning the initial grid on the homepage, I faced some difficulties when I tried to place the images in order.
 The correct layout should be => wrap all images inside a flexbox, have the first image in a seperate div and the 4 others in another that will be displayed as grid.
 
 Concerning the tabs (section1 - section2) and rerouting: I tried to implement it as tabs using the react-tabs library.Unfortunately there is an issue when you try to dynamically  change the active tab on runtime, this approach would have to work but it didn't. (view more here: https://github.com/reactjs/react-tabs#controlled-mode ). Maybe a nested route approach could work better.
 
 Concerning the icons on page2, the image urls where not provided (on the repsectice API endpoint) so I just left the alt text there.
 
 Feel free to contact me for any clarifications. Thank you.
 
 
  
  
