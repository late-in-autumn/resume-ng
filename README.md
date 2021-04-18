# Resume-NG

This is a resume/CV built with [Next.js](https://nextjs.org/) and [React Bootstrap](https://react-bootstrap.github.io/). The aesthetics is inspired by several iterations of "paper" resumes that I have used, and the practice of using static JSON files as the data backend is inspired by [this project](https://github.com/imvpn22/resume/).

See it in action: [www.tombu.info](https://www.tombu.info/)

## Build your own resume
- Change your name in `pages/_app.tsx` (page title) and `components/MainFrame.tsx` (page heading)
- Change the imported web fonts in `styles/fonts.css` with your own
   - Currently it points to my personal TypeKit project, and I may change it at any time
- Customize your profile by editing the JSON-formatted data files in `data/`