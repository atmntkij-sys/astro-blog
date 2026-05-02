# Astro Skill

This skill provides commands and utilities for working with Astro framework projects within OpenClaw.

## Commands

### Create a new Astro project
```bash
openclaw astro new <project-name>
```

### Start development server
```bash
openclaw astro dev
```

### Build for production
```bash
openclaw astro build
```

### Preview production build
```bash
openclaw astro preview
```

### Add Astro integrations
```bash
openclaw astro add <integration>
```

## Examples

Create a new blog:
```bash
openclaw astro new my-blog --template blog
```

Add Tailwind CSS:
```bash
openclaw astro add tailwind
```

## Notes

- Ensure Node.js and npm are available in your environment.
- This skill assumes you are working within an Astro project directory or creating a new one.
- For detailed Astro documentation, visit https://docs.astro.build

## Dependencies

- Node.js >= 18
- npm or pnpm or yarn

## Usage within OpenClaw

You can invoke these commands via the OpenClaw CLI. For example:
```
/openclaw astro new my-site
```