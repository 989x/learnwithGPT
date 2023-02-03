import requests
from bs4 import BeautifulSoup
import json

# Read index.html file
with open("index.html", "r", encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# NEW
# sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20

# OLD
#                sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20

# Find all div elements with the specified class
divs = soup.find_all("div", class_="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20")

# Create a list to store the extracted information
data = []

# Loop through each div element
for div in divs:
    # Try to find the img element with the specified class
    img = div.find("img", class_="s-image")

    # Extract the link or set it to '' if the img element is not found
    link = img["src"] if img else ''

    # Try to find the span element with the specified class
    span_title = div.find("span", class_="a-size-base-plus a-color-base a-text-normal")
    # Extract the title or set it to '' if the span element is not found
    title = span_title.text if span_title else ''

    # Try to find the span element with the specified class
    span_rating = div.find("span", class_="a-icon-alt")
    # Extract the rating or set it to '' if the span element is not found
    rating = span_rating.text if span_rating else ''

    # Try to find the span element with the specified class
    span_price = div.find("span", class_="a-price-whole")
    # Extract the price or set it to '' if the span element is not found
    price = span_price.text if span_price else ''

    # Append the extracted information as a dictionary to the data list
    data.append({
        "link": link,
        "title": title,
        "rating": rating,
        "price": price
    })

# Write the data list to a JSON file
with open("data.json", "w") as file:
    json.dump(data, file)
