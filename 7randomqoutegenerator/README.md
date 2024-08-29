# 📜 Random Quote Generator
# DEMO 👁️  https://random-qoute-generator-rohit.netlify.app/

The **Random Quote Generator** is a simple web application that displays random quotes with their authors, fetched from an API. It's a fun project that demonstrates the basics of JavaScript, asynchronous programming with `fetch`, and dynamic content updates in the DOM.

## 🌟 Features

- **🎲 Random Quotes**: Displays a new random quote each time the page loads or the "New Quote" button is clicked.
- **🖊️ Author Display**: Shows the author of the quote below the text.
- **🔗 API Integration**: Fetches quotes from the [Quotable API](https://api.quotable.io/random).

## 📋 How to Use

1. **Open the Webpage**: Open the `index.html` file in your browser.
2. **View a Quote**:
   - A random quote is automatically displayed when the page loads.
3. **Get a New Quote**:
   - Click the **"New Quote"** button to fetch and display a new random quote.

## 🌐 API Used

The project uses the [Quotable API](https://api.quotable.io/random) to fetch random quotes.

### Example API Request

Here’s a code snippet that shows how the quotes are fetched using the API:

```javascript
const apiUrl = "https://api.quotable.io/random";

async function getQuote(Url) {
  const response = await fetch(Url);
  let data = await response.json();
  quoteText.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(apiUrl);
```

## 📂 Project Structure

```
📁 Random-Quote-Generator/
├── 📄 index.html
├── 📄 style.css
└── 📄 main.js
```

- **`index.html`**: The HTML file that contains the structure of the Random Quote Generator.
- **`style.css`**: The CSS file for styling the application.
- **`main.js`**: The JavaScript file that contains the logic to fetch and display quotes.

## 🎨 Styling

- The background color is set to **fuchsia** to make the application vibrant and lively.
- Quotes and authors are styled with a modern, clean look using simple colors and fonts.
- The **"New Quote"** button changes color on hover to enhance user interaction.

## 📦 Installation

To use this project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/random-quote-generator.git
   ```
2. **Open the `index.html` File** in your preferred web browser.

## 🔧 How It Works

1. **JavaScript Functions**:
   - **`getQuote()`**: An asynchronous function that makes a request to the Quotable API and updates the webpage with the fetched data.

2. **Dynamic Content Update**:
   - The quote and author fields are updated using `innerHTML` whenever a new quote is fetched.

3. **Initial Load**:
   - The script automatically fetches and displays a quote when the page first loads.

## 📈 Future Enhancements

- **🌍 Local Storage**: Save the last displayed quote in local storage so it persists on page reload.
- **🌓 Dark Mode**: Add a toggle to switch between light and dark themes.
- **📱 Mobile Optimization**: Improve responsiveness and usability on mobile devices.

## 🎉 Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📝 License

This project is open-source 
