# Instructions for using SSG functionality - Capstone 2022
This is a Static Site Generator that uses **Node.js** and **[Showdown](https://github.com/showdownjs/showdown)** to convert markdown files into html. 

## Setup

### Install Node.js

### Move Into 'new' Directory
	cd new

### Install Package
	npm install

### Update partials for your web project
	Head, Header, and Footer files are stored in the 'partials' folder. 
	Update them as needed for your project. 
	They are automatically concatenated into each page when you run the build file. 

### Create content for website
	Write markdown files and store them in the 'content' folder

## Generate html files
	node build_html.js
