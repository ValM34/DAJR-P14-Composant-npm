# React/TypeScript Table component
# Features
- Display a Table component
- Choose how much entries you want to display
- Handle pagination
- A search bar to select a specific entry (or a specific group of entries)

# How to use
## Required
- Node: 18.16.0
- Typescript: ^5.2.2
- React: ^18.3.1
## Install
```bash
npm install dajr-valentin-p14-new
```
## Use it as React component
```js
import { Table } from 'dajr-valentin-p14-new';
```
Inject your data in props
```html
<Table data={data} />
```

## Format for your data
```js
[
  {
    firstName: "string",
    lastName: "string",
    ...
  },
  {
    firstName: "string",
    lastName: "string",
    ...
  },
  {
    ...
  }
]
```
