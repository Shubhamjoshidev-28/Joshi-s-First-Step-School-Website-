📘 Joshi’s First Step School – Official Website

A responsive, lightweight, and fully dynamic school website built using HTML, CSS, and JavaScript, with Google Sheets used as a backend for content management.
Designed for performance, simplicity, and easy maintenance without paid servers or databases.

🌐 Live Project Purpose

This website is created for Joshi’s First Step School to:

Showcase school information

Display announcements and activities dynamically

Allow easy content updates without code changes

Work smoothly on mobile, tablet, and desktop devices

🧱 Tech Stack

Frontend

HTML5

CSS3 (Responsive, Mobile-first)

Vanilla JavaScript (No frameworks)

Backend (Serverless)

Google Sheets (as database)

Google Sheets CSV publishing

Fetch API

Hosting

Static hosting (PC server / GitHub Pages / any static server)

📄 Pages & Features
🏠 Home Page

Dynamic image slider fetched from Google Sheets

School introduction and highlights

Fully responsive hero section

Mobile-friendly navigation with toggle menu

Fast loading (lazy loading images)

ℹ️ About Page

School overview and history

Mission & Vision section

Core values displayed in card format

Timeline showing school journey

Teacher profile section

Background blur effect with layered content

Fully responsive layout

📝 Admission Page

Clear admission instructions

Direct redirection to Google Form

Mobile-optimized layout

Consistent design with other pages

🎯 Activities Page

Dynamic activity gallery

Activity title, date, and image fetched from Google Sheets

Lazy-loaded images for performance

Automatic layout adjustment for different screen sizes

No hardcoded content

📢 Announcements Page

Dynamic announcements list

Date-wise display

Admin can update announcements via Google Sheets

No redeployment required after updates

💰 Fees Page

Fee structure display

Clear and readable layout

Easy to update content

👩‍🎓 Student Data Page

Student data fetched from Google Sheets

Structured tabular format

Read-only secure display

📞 Contact Page

School contact details

Address and communication info

Clean and minimal design

🧠 Backend Logic (Google Sheets as Backend)

This project uses Google Sheets as a serverless backend, eliminating the need for:

Traditional databases

Backend servers

Authentication complexity

How it Works:

Data is stored in Google Sheets

Sheet is published as CSV

JavaScript fetches CSV data using fetch()

Data is parsed and rendered dynamically

Used For:

Home page slider

Activities gallery

Announcements

Student data

Advantages:

Non-technical admins can update content

Instant updates without code changes

Free and reliable

Scales easily for small institutions