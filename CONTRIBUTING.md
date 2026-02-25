# Contributing to InfectoTrack

Thank you for your interest in contributing! Follow these guidelines to collaborate effectively.

## Quick Start for Collaborators

### 1. First Time Setup
```bash
git clone https://github.com/yourusername/InfectoTrack.git
cd InfectoTrack
npm install -f
npm run dev
```

### 2. Before Each Work Session
```bash
git pull origin main
npm install -f
npm run dev
```

## Development Workflow

### Creating a Feature Branch
```bash
# Always branch from main and pull latest first
git checkout main
git pull origin main

# Create your feature branch
git checkout -b feature/animal-health-improvements
```

### Making Changes

1. **Code Standards**
   - Use React functional components
   - Use Tailwind CSS for styling (no CSS files)
   - Keep components modular and reusable

2. **File Structure**
   ```
   src/
   ├── pages/        # Page components
   │   ├── Dashboard.jsx
   │   ├── AnimalPage.jsx
   │   ├── EnvironmentPage.jsx
   │   └── HealthPage.jsx
   └── App.jsx       # Main app component
   ```

3. **Testing Changes**
   ```bash
   npm run dev
   # Check your changes in browser at http://localhost:5174
   ```

### Committing Changes

Use clear, descriptive commit messages:

```bash
# Good commits
git commit -m "Add: Animal health statistics chart"
git commit -m "Fix: Sidebar navigation on mobile"
git commit -m "Update: Tailwind configuration for dark theme"

# Avoid vague messages
git commit -m "stuff"  # ❌ Bad
git commit -m "Update code"  # ❌ Bad
```

### Pushing Changes
```bash
git push origin feature/your-feature-name
```

## Pull Request Process

1. Push your feature branch
2. Go to GitHub and click "Compare & Pull Request"
3. Fill in the PR title and description:
   ```
   Title: [TYPE] Brief description
   
   Description:
   - What problem does this solve?
   - What changes were made?
   - How to test the changes?
   ```

4. Wait for review and address feedback

## Common Tasks

### Adding a New Page
1. Create file in `src/pages/NewPage.jsx`
2. Add navigation link in Dashboard.jsx
3. Add import and state management

Example:
```jsx
// src/pages/NewPage.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const NewPage = ({ onBack }) => {
  return (
    <div className="flex-1">
      <header className="bg-white border-b p-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold">New Page Title</h1>
      </header>
      <div className="p-8">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default NewPage;
```

### Adding a New Component
1. Create file in `src/components/` (create folder if needed)
2. Export as default
3. Import in pages where needed

### Updating Styles
- Use Tailwind CSS classes only
- Reference colors: `slate-900`, `cyan-500`, `emerald-400`, etc.
- Use semantic spacing: `p-4`, `gap-6`, `mb-8`, etc.

## Troubleshooting

### Dependencies Conflict
```bash
rm -r node_modules package-lock.json
npm install -f
```

### Cache Issues
```bash
npm cache clean --force
rm -rf .next dist
npm install -f
npm run dev
```

### Git Merge Conflicts
1. Open conflicted file
2. Look for `<<<<<<<`, `=======`, `>>>>>>>`
3. Manually edit to keep desired changes
4. Commit once resolved

## Code Review Checklist

Before submitting a PR, ensure:
- [ ] Code follows Tailwind CSS patterns
- [ ] No console errors/warnings
- [ ] Components are reusable
- [ ] Commit messages are clear
- [ ] Tested on the dev server (`npm run dev`)
- [ ] No unnecessary dependencies added

## Questions?

- Check the [README.md](README.md) for setup help
- Open an issue on GitHub
- Ask in pull request comments

---

**Thank you for contributing to InfectoTrack! 🎉**
