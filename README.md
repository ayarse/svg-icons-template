# SVG Icons Template

A template I use to create custom React icon packages from SVGs to maintain consistent icon libraries in my projects. I usually use this template with a monorepo setup.

## Setup

1. Copy this template into your monorepo (e.g., `packages/my-icons`)
2. Install dependencies:

```bash
npm install
```

## Usage

1. Place your SVG files in the `svg/` directory:

```
svg/
  ├── menu-icon.svg
  ├── close-icon.svg
  └── ...
```

2. Run the build command:

```bash
npm run build
```

3. Import and use the icons in your React components:

```tsx
import { MenuIcon, CloseIcon } from "@your-org/my-icons";

function App() {
  return (
    <div>
      <MenuIcon />
      <CloseIcon color="red" size={24} />
    </div>
  );
}
```

## Icon Properties

Each icon component accepts the following props:

- `size?: number` - Sets both width and height
- `color?: string` - Sets the icon color (uses currentColor by default)
- `title?: string` - Accessible title for the icon
- `ref?: Ref<SVGSVGElement>` - Forward refs to the SVG element
- All standard SVG attributes are also supported

## Configuration

### SVGR Config

The transformation of SVGs to React components is configured in `svgr.config.js`:

```js
module.exports = {
  icon: true, // Optimize for icons
  typescript: true, // Generate TypeScript files
  ref: true, // Enable ref forwarding
  memo: true, // Wrap in React.memo
  svgProps: {
    width: 24, // Default width
    height: 24, // Default height
  },
  replaceAttrValues: {
    "#000": "currentColor", // Replace black with currentColor
    "#000000": "currentColor",
  },
  expandProps: "end", // Spread props at the end
  titleProp: true, // Enable title prop
};
```

## Build Process

The build process consists of three steps:

1. `prebuild`: Verifies the existence of the svg directory
2. `build:icons`: Transforms SVGs into React components using SVGR
3. `build:ts`: Compiles TypeScript files

## Output

Built files are generated in the `dist/` directory:

- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES modules bundle
- `dist/index.d.ts` - TypeScript declarations

## Requirements

- Node.js 14+
- React 16.8+ (peer dependency)

## License

MIT
