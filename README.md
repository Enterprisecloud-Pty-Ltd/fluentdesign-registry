# FluentDesign Registry

Static shadcn/ui registry for create-ec-app.

- Catalog URL: `https://schalk-conradie.github.io/fluentdesign-registry/r/registry.json`
- Namespace URL: `https://schalk-conradie.github.io/fluentdesign-registry/r/{name}.json`
- Namespace: `@fd`

Install the namespace in a shadcn project:

```bash
npx shadcn@latest registry add @fd=https://schalk-conradie.github.io/fluentdesign-registry/r/{name}.json
npx shadcn@latest add @fd/button
```

Generate a create-ec-app webresource:

```bash
npx create-ec-app@latest --project-name fluentdesign-webresource --target webresource --ui shadcn-ui --shadcn-registry https://schalk-conradie.github.io/fluentdesign-registry/r/registry.json
```
