# Hugo OpenSourceKyle Theme

Welcome to the **hugo-opensourcekyle-theme**! This is a custom Hugo theme designed by OpenSourceKyle.

## 🚀 How to Clone and Set Up the Theme

If you're cloning your **Hugo website repository** on a new computer and the **theme submodule** isn't downloaded yet, follow these steps:

### **1️⃣ Clone Your Website Repository (with Submodules)**

When cloning your Hugo site, use this command to ensure all submodules (including this theme) are downloaded:

```sh
git clone --recursive git@github.com:OpenSourceKyle/OpenSourceKyle.github.io.git
```

🔹 **If you already cloned the repo and the theme folder is empty**, run:

```sh
git submodule update --init --recursive
```

---

### **2️⃣ Verify the Theme is in the Correct Folder**

After cloning and initializing the submodule, ensure the theme is inside the `themes/` directory:

```sh
ls themes/
```

You should see:

```
hugo-opensourcekyle-theme
```

---

### **3️⃣ Running the Hugo Website**

Now, navigate to your Hugo project folder and start the Hugo server:

```sh
cd YOUR_HUGO_WEBSITE
hugo server
```

If everything is set up correctly, your site should load with this theme!

---

## 🔄 Keeping the Theme Updated

Whenever the theme is updated in the **GitHub repo**, you can pull the latest changes by running:

```sh
git submodule update --remote --merge
```

---

## 🎨 Using Hugo Shortcodes

This theme includes several custom Hugo shortcodes to enhance your site:

### **📅 Embed Calendly**
To embed a Calendly widget, use:

```md
{{< calendly url="https://calendly.com/your-schedule" >}}
```

---

### **📂 Collapsible Sections**
To create collapsible sections in Markdown:

```md
{{< collapsible title="Click to Expand" >}}
Your hidden content here.
{{< /collapsible >}}
```

---

### **🖼️ Lightbox for Images**
To enable images to open in an overlay:

```md
{{< lightbox src="/images/example.jpg" alt="A beautiful image" >}}
```

---

### **🔽 Scroll to Calendly Button**
To add a floating button that scrolls to your Calendly section:

```md
{{< scroll-to-calendly >}}
```

---

## 📄 Creating New Blog Posts or Pages

To create a new blog post or page, you can use the following commands:

### **Creating a New Blog Post**

```sh
hugo new blog/YYYY-MM-DD-title.md
```

### **Creating a New Page**

```sh
hugo new pages/title.md
```

### **Important Note**

- The filenames must follow the format `YYYY-MM-DD-title.md` for blog posts.
- The front matter for each post or page will be verified during the build process. Ensure that the required fields (title, date, tags, image, and image_caption) are included in the front matter to avoid build errors.

---

## 📌 Alternative: Manually Cloning the Theme (If Not Using Submodules)

If you prefer not to use submodules, you can manually clone the theme into the `themes/` folder:

```sh
cd YOUR_HUGO_WEBSITE/themes/
git clone https://github.com/OpenSourceKyle/hugo-opensourcekyle-theme.git
```

Then, set the theme in your `config.toml`:

```toml
theme = "hugo-opensourcekyle-theme"
```

---

## 🛠 Troubleshooting

**1️⃣ Theme not appearing?**

- Check if `theme = "hugo-opensourcekyle-theme"` is set in `config.toml`.
- Run `hugo server` and check for errors.

**2️⃣ Submodule not updating?**

- Run `git submodule update --remote --merge`.
- If that doesn't work, try `git submodule sync` and then update again.

**3️⃣ Want to remove the submodule?**
If you decide to remove the submodule and just copy the theme manually:

```sh
git submodule deinit themes/hugo-opensourcekyle-theme
git rm themes/hugo-opensourcekyle-theme
rm -rf .git/modules/themes/hugo-opensourcekyle-theme
```

Then manually clone the theme as shown above.

---

## 📜 License

This theme is licensed under **[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)**. Feel free to use and modify it for non-commercial purposes with proper attribution.

---

## ✨ Contributing

Pull requests are welcome! If you have any improvements, feel free to submit a PR.

---

## 🌎 Connect

Created by **OpenSourceKyle**.

- GitHub: [@OpenSourceKyle](https://github.com/OpenSourceKyle)
- Website: [https://OpenSourceKyle.com](https://OpenSourceKyle.com)
