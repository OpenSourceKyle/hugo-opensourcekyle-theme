# Hugo OpenSourceKyle Theme

Welcome to the **hugo-opensourcekyle-theme**! This is a custom Hugo theme designed by OpenSourceKyle.

## 🚀 How to Clone and Set Up the Theme

If you're cloning your **Hugo website repository** on a new computer and the **theme submodule** isn't downloaded yet, follow these steps:

### **1️⃣ Clone Your Website Repository (with Submodules)**

When cloning your Hugo site, use this command to ensure all submodules (including this theme) are downloaded:

```sh
git clone --recursive https://github.com/YOUR_USERNAME/YOUR_HUGO_WEBSITE.git
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

## 🎨 Want to Customize the Theme?

If you want to modify the theme, you have two options:

1. **Modify it directly** inside `themes/hugo-opensourcekyle-theme/` (not recommended if using submodules).
2. **Fork this repository**, make changes, and update your submodule to point to your forked version.

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
- If that doesn’t work, try `git submodule sync` and then update again.

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
