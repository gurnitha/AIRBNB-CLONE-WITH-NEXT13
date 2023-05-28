# AIRBNB-CLONE-WITH-NEXT13
Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023 By: Ytb - Code With Antonio

[Youtube:](https://www.youtube.com/watch?v=c_-b_isI4vg)
[Github Repo:](https://github.com/gurnitha/AIRBNB-CLONE-WITH-NEXT13) 



## 1. INVIRONMENT SETUP


#### 1.1 INVIRONMENT SETUP - Create project

        Steps creating a new app:

        1. Create the app
        hp@ING:airbnbclone ~ npx create-next-app --typescript
        
        2. Name your app as you like
        √ What is your project named? ... airbnbclone
        
        3. Choose yes
        √ Would you like to use ESLint with this project? ... No / Yes
        
        4. Choose no
        √ Would you like to use `src/` directory with this project? ... No / Yes
        
        5. Choose yes
        √ Would you like to use experimental `app/` directory with thi        project? ... No / Yes

        6. Press enter
        √ What import alias would you like configured? ... @/*

        7. First, run the development server:

        hp@ING:airbnbclone ~ npm run dev

        new file:   .eslintrc.json
        modified:   .gitignore
        modified:   README.md
        new file:   app/api/hello/route.ts
        new file:   app/favicon.ico
        new file:   app/globals.css
        new file:   app/layout.tsx
        new file:   app/page.module.css
        new file:   app/page.tsx
        new file:   next.config.js
        new file:   package-lock.json
        new file:   package.json
        new file:   public/next.svg
        new file:   public/thirteen.svg
        new file:   public/vercel.svg
        new file:   tsconfig.json


#### 1.2 INVIRONMENT SETUP - Hallo Arbnb!

        modified:   README.md
        modified:   app/page.tsx


#### 1.3 INVIRONMENT SETUP - Changed page title and description

        modified:   README.md
        modified:   app/layout.tsx


#### 1.4 INVIRONMENT SETUP - Adding new Nunito font

        modified:   README.md
        modified:   app/layout.tsx


#### 1.5 INVIRONMENT SETUP - Install tailwind css

        1. Install  tailwind css

        hp@ING:airbnbclone ~ npm install -D tailwindcss postcss autoprefixer
        ...

        2. Initialize tailwind css

        hp@ING:airbnbclone ~ npx tailwindcss init -p
        

        modified:   README.md
        modified:   package-lock.json
        modified:   package.json
        new file:   postcss.config.js
        new file:   tailwind.config.js


#### 1.6 INVIRONMENT SETUP - Configuring tailwind css

        modified:   README.md
        new file:   app/globals.css
        modified:   app/layout.tsx
        new file:   app/page.module.css
        modified:   app/page.tsx
        modified:   tailwind.config.js


#### 1.7 INVIRONMENT SETUP - Set css for global element of html

        modified:   README.md
        new file:   app/globals.css


## 2. NAVBAR


#### 2.1 NAVBAR - Create navbar component

        new file:   app/components/Container.tsx
        new file:   app/components/navbar/Navbar.tsx
        modified:   app/layout.tsx
        modified:   app/page.tsx

        NEXT:

        Add React interface to Navbar
