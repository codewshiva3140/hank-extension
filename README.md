# hank-extension
# 🚨 Hank Panic – Chrome Extension  
A fun and lightweight Chrome extension that shows **Hank (Breaking Bad)** whenever your answer on LeetCode is wrong.  
Perfect for adding a bit of humor while practicing DSA and coding problems.

---

## 🚀 Features
- 😭 Shows Hank when your LeetCode answer is incorrect  
- ⚡ Lightweight script (content.js) injected directly on LeetCode  
- 🎨 Simple UI and clean animation  
- 🔌 Works automatically — no setup needed  
- 🧩 Easy to modify and extend  

---

## 📁 Project Structure

```
hank-panic-extention/
│── manifest.json
│── content.js
│── style.css
│── hank.gif
│── README.md
```

---

## 🛠 How It Works
The extension injects a content script (`content.js`) into **leetcode.com**.  
When the platform marks your submission as ❌ wrong, the script triggers an animation showing **Hank** popping up on screen.

---

## 🧪 Installation (Developer Mode)

1. Download or clone this repo:
   ```bash
   git clone https://github.com/codewshiva3140/hank-extension.git
   ```

2. Open **Chrome** → Go to:
   ```
   chrome://extensions/
   ```

3. Turn on **Developer Mode** (top-right corner)

4. Click **Load unpacked**

5. Select the folder:
   ```
   hank-panic-extention/
   ```

6. Done! The extension is now active 🎉  

---

## 🎥 Preview  
(You can add screenshots or a GIF here later — I can generate them if you want)

---

## 🧰 Tech Used
- **JavaScript**  
- **CSS**  
- **Chrome Extensions Manifest v3**  
- **LeetCode DOM Events**  

---

## 📌 Future Improvements
- Sound effects  
- More characters (Jesse, Walt, Saul Goodman)  
- Settings popup  
- Toggle on/off  
- Custom error messages  

---

## 👨‍💻 Author
**Shiva Kumar**  
📧 codewshiva@gmail.com  
💻 GitHub: [codewshiva3140](https://github.com/codewshiva3140)

---

## ⭐ Contribute
Want to improve the extension?  
Feel free to open a pull request or suggest fun ideas!

---

## 📝 License
This project is open-source and free to use.

