# React + Pure Virtual List

This package provides a pure React Virtual List.

## Getting Started

1. pnpm i pure-virtual-list

2. Use it in your component

```tsx
import { VirtualList } from 'pure-virtual-list';
// list template
const ListItem = (item: unknown, index: number) => {
    return <div key={index}>{(item as {id: number; key: string;}).key}</div>;
};
const App = () => {
  // mock data
  const items = Array.from({ length: 1000 }, (_, i) => ({ id: i, key: `Item ${i}` }));

  return (
      <VirtualList
        data={items}
        renderItem={ListItem}
        itemHeight={50}
        containerHeight={300}
        buffer={4}
      />
  )
}
export default App
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
