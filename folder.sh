#!/bin/bash

# Create folders
mkdir -p src/{components,css,data,assets}

# Create asset placeholders
touch src/assets/profile.png
touch src/assets/hero-bg.jpg

# Create component files
touch src/components/{Navbar,Hero,About,Skills,Projects,Contact,Footer}.jsx

# Create CSS files
touch src/css/{global,navbar,hero,about,skills,projects,contact,footer}.css

# Create data file
touch src/data/profile.js

# Create/overwrite App.jsx if needed
touch src/App.jsx

echo "Project structure created successfully!"
