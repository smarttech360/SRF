# Student Research Forum

A platform for students to share and discover research papers in medical sciences. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Medical Subjects**
  - Basic Sciences (Anatomy, Physiology, Biochemistry, Pathology)
  - Clinical Sciences (Pharmacology, Microbiology, Medicine, Surgery)
- **Research Papers** - Browse and submit research papers
- **Events** - Academic events and conferences
- **Responsive Design** - Mobile-friendly interface
- **Modern UI** - Built with Tailwind CSS

## Tech Stack

- Next.js 13
- TypeScript
- Tailwind CSS
- React

## Project Structure

```
student-research-forum/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── submit.tsx
│   │   ├── events.tsx
│   │   └── specialties/
│   │       └── [specialty].tsx
│   └── styles/         # Global styles
│       └── globals.css
├── public/            # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 