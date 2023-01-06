### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Project Directory

```
|-- .editorconfig
|-- .eslintrc.cjs
|-- .gitignore
|-- .prettierrc.json
|-- auto-imports.d.ts
|-- components.d.ts
|-- env.d.ts
|-- index.html
|-- package.json
|-- pnpm-lock.yaml
|-- README.md
|-- tsconfig.config.json
|-- tsconfig.json
|-- vite.config.ts
|-- .vscode
|   |-- extensions.json
|-- public
|   |-- favicon.ico
|-- src
    |-- App.vue
    |-- main.ts
    |-- assets
    |   |-- css
    |   |   |-- common.less
    |   |   |-- index.less
    |   |   |-- reset.less
    |   |-- image
    |       |-- login-bg.svg
    |       |-- logo.svg
    |-- components
    |   |-- echarts
    |   |   |-- index.ts
    |   |   |-- data
    |   |   |   |-- china.json
    |   |   |-- src
    |   |   |   |-- base-echart.vue
    |   |   |   |-- line-echart.vue
    |   |   |   |-- map-echart.vue
    |   |   |   |-- pie-echart.vue
    |   |   |   |-- rose-echart.vue
    |   |   |-- utils
    |   |       |-- convert-data.ts
    |   |       |-- coordinate-data.ts
    |   |-- main-header
    |   |   |-- main-header.vue
    |   |   |-- c-cpns
    |   |       |-- breadcrumb.vue
    |   |       |-- header-info.vue
    |   |-- main-menu
    |   |   |-- main-menu.vue
    |   |-- page-content
    |   |   |-- page-content.vue
    |   |-- page-modal
    |   |   |-- page-modal.vue
    |   |-- page-search
    |       |-- page-search.vue
    |-- global
    |   |-- register-icons.ts
    |-- hooks
    |   |-- usePageContent.ts
    |   |-- usePageModal.ts
    |-- router
    |   |-- index.ts
    |   |-- login
    |   |-- main
    |       |-- analysis
    |       |   |-- dashboard
    |       |   |   |-- dashboard.ts
    |       |   |-- overview
    |       |       |-- overview.ts
    |       |-- product
    |       |   |-- category
    |       |   |   |-- category.ts
    |       |   |-- goods
    |       |       |-- goods.ts
    |       |-- story
    |       |   |-- chat
    |       |   |   |-- chat.ts
    |       |   |-- list
    |       |       |-- list.ts
    |       |-- system
    |           |-- department
    |           |   |-- department.ts
    |           |-- menu
    |           |   |-- menu.ts
    |           |-- role
    |           |   |-- role.ts
    |           |-- user
    |               |-- user.ts
    |-- service
    |   |-- index.ts
    |   |-- config
    |   |   |-- index.ts
    |   |-- login
    |   |   |-- login.ts
    |   |-- main
    |   |   |-- main.ts
    |   |   |-- analysis
    |   |   |   |-- analysis.ts
    |   |   |-- system
    |   |       |-- system.ts
    |   |-- request
    |       |-- index.ts
    |-- store
    |   |-- index.ts
    |   |-- login
    |   |   |-- login.ts
    |   |-- main
    |       |-- main.ts
    |       |-- analysis
    |       |   |-- analysis.ts
    |       |-- system
    |           |-- system.ts
    |-- utils
    |   |-- cache.ts
    |   |-- format.ts
    |   |-- map-menus.ts
    |-- views
        |-- login
        |   |-- login.vue
        |   |-- c-cpns
        |       |-- login-panel.vue
        |       |-- pane-account.vue
        |       |-- pane-phone.vue
        |-- main
        |   |-- main.vue
        |   |-- analysis
        |   |   |-- dashboard
        |   |   |   |-- dashboard.vue
        |   |   |   |-- c-cpns
        |   |   |       |-- chart-card
        |   |   |       |   |-- chart-card.vue
        |   |   |       |-- count-card
        |   |   |           |-- count-card.vue
        |   |   |-- overview
        |   |       |-- overview.vue
        |   |       |-- c-cpns
        |   |           |-- about
        |   |           |   |-- about.vue
        |   |           |-- structure
        |   |               |-- structure.vue
        |   |-- product
        |   |   |-- category
        |   |   |   |-- category.vue
        |   |   |-- goods
        |   |       |-- goods.vue
        |   |-- story
        |   |   |-- chat
        |   |   |   |-- chat.vue
        |   |   |-- list
        |   |       |-- list.vue
        |   |-- system
        |       |-- department
        |       |   |-- department.vue
        |       |   |-- config
        |       |       |-- content.config.ts
        |       |       |-- modal.config.ts
        |       |       |-- search.config.ts
        |       |-- menu
        |       |   |-- menu.vue
        |       |   |-- config
        |       |       |-- content.config.ts
        |       |-- role
        |       |   |-- role.vue
        |       |   |-- config
        |       |       |-- content.config.ts
        |       |       |-- modal.config.ts
        |       |       |-- search.config.ts
        |       |-- user
        |           |-- user.vue
        |           |-- config
        |               |-- content.config.ts
        |               |-- modal.config.ts
        |               |-- search.config.ts
        |-- not-found
            |-- not-found.vue
```

