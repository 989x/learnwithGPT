### example 

Web Scraping Amazon Product Data using ChatGPT and Python #openai #chatgpt
- https://www.youtube.com/watch?v=9MNCGdaJfA0

### prompt

use python,
read index.html file and parse it with beautifulsoup.

find all div with class="sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"

for each dic from above list,
try find img with class="s-image" then link=img.src
except link=''

try find span with class="a-size-base-plus a-color-base a-text-normal" then title=span.text
except title=''
try find span with class="a-icon-alt" then rating=span.text
except rating=''
try find span with class="a-price-whole" then price=span.text
except price=''
open data.json and write link,title,rating and price in json format.

usage

```bash
python3 app.py
```

install

```bash
sudo pip3 install requests

pip3 install BeautifulSoup4
```
