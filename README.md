# react-wasm-template

## dev
### wasm
```zsh
$ cd wasm-module
```

#### 📦 build
```zsh
$ wasm-pack build
```

#### 🔗 link
```zsh
$ cd pkg

$ yarn link
# or
$ npm link
```
### client
```zsh
$ cd client
```
#### :wrench: Init
```zsh
$ yarn link <your-project-name>
$ yarn

# or

$ npm link <your-project-name>
$ npm install 
```

#### ⚛️ start dev server
```zsh
$ yarn start
```

## reference
> https://prestonrichey.com/blog/react-rust-wasm/
>
> https://medium.com/@rossbulat/webassembly-modules-an-introduction-5554b8982402
