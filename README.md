# @xionhub/fsd-prettier

Beautifully changes the import configuration of a project configured with Feature-Sliced-Design.

You can refer to actual example projects applying this library at [@xionhub/fsd-example repository](https://github.com/xionhub/fsd-example).

## Overview

@xionhub/fsd-prettier follows feature slice design rules and formats all imports in the same order as the mental model of the feature slice design.

### **example:**

**before**

```ts
import { featuresexample } from "~/features/example";

import { appexample } from "~/app/example";
import { useRouter } from "next/navigation";
import { entitiesexample } from "~/entities/example";
import React from "react";
import { pagesexample } from "~/pages/example";
import Image from "next/image";
import { sharedexample } from "~/shared/example";

import { widgetsexample } from "~/widgets/example";
```

**after**

```ts
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { appexample } from "~/app/example";

import { pagesexample } from "~/pages/example";

import { widgetsexample } from "~/widgets/example";

import { featuresexample } from "~/features/example";

import { entitiesexample } from "~/entities/example";

import { sharedexample } from "~/shared/example";
```

@xionhub/fsd-prettier takes all 3rd party imports and places the fsd component underneath them.

At this time, the import order and names of fsd components are exactly the same as the picture below.

![feature-sliced-design](./docs/images/feature-sliced-design.jpg)

## Installation

To install the @xionhub/fsd-prettier @xionhub/fsd-typescript in your project, use the following command:

```
npm install -D @xionhub/fsd-prettier @xionhub/fsd-typescript @trivago/prettier-plugin-sort-imports prettier
```

```
pnpm install -D @xionhub/fsd-prettier @xionhub/fsd-typescript @trivago/prettier-plugin-sort-imports prettier
```

```
yarn add -D @xionhub/fsd-prettier @xionhub/fsd-typescript @trivago/prettier-plugin-sort-imports prettier
```

## Usage

### Basic Case Guide

If you use npm, yarn classic, or pnpm, follow these instructions:

Create the following in the root of your project:

.prettierrc.js

```
  ...require("@xionhub/fsd-prettier"),
  //...and your personal settings
```

@xionhub/fsd-prettier depends on the path alias.

Add the following settings to the path section of tsconfig.json:

```json
  "extends": ["@xionhub/fsd-typescript"],
  "compilerOptions": {
    "baseUrl": ".",
  },
```

baseUrl and extends are very important.

BaseUrl should be based on where your src folder is located (usually ".")

@xionhub/fsd-prettier may seem violent, but it assumes that your project's fsd structure will exist in the src folder.

@xionhub/fsd-prettier expects the structure of your feature-sliced-design project to look like this:

Modify the project structure as follows, or if you don't like it, refer to the **Advanced Guide** and create your own customization rules.

```
src
  app
    your-folder
    your-folder
    ...lot of other foler
  pages
    your-folder
    your-folder
    ...lot of other foler
  widgets
    your-folder
    your-folder
    ...lot of other foler
  features
    your-folder
    your-folder
    ...lot of other foler
  entities
    your-folder
    your-folder
    ...lot of other foler
  shared
    your-folder
    your-folder
    ...lot of other foler
```

### PnP Guide

I really like yarn berry's PnP feature.

However, PnP often does not resolve the path of a shared configuration library such as @xionhub/fsd-prettier well.

If you are using PnP functionality in your project, please follow these instructions:

```
yarn add -D @xionhub/fsd-prettier @trivago/prettier-plugin-sort-imports prettier
yarn unplug @xionhub/fsd-prettier
yarn unplug @xionhub/fsd-typescript
yarn unplug @trivago/prettier-plugin-sort-imports
yarn dlx @yarnpkg/sdks vscode
```

If you've done all that, now follow the instructions in the Basic Case Guide

### Testing

```
npx prettier --write .
yarn dlx pretteir --write .
```

prettier --write "path or filename" is a way to set a file to be formatted with prettier through the cli command.

This allows you to quickly check whether @xionhub/fsd-prettier is well integrated into your project.

## Advanced Guide

@xionhub/fsd-prettier is not magic.

Using TypeScript and the prettier @tivago/prettier-plugin-sort-imports

You can create custom configurations that behave identically to this library.

This library just provides ideas.

For example this is all the configuration from @xionhub/fsd-typescript:

```
{
  "compilerOptions": {
    "paths": {
      "~/app/*": ["./src/app/*"],
      "~/processes/*": ["./src/processes/*"],
      "~/pages/*": ["./src/pages/*"],
      "~/widgets/*": ["./src/widgets/*"],
      "~/features/*": ["./src/features/*"],
      "~/entities/*": ["./src/entities/*"],
      "~/shared/*": ["./src/shared/*"],
      "~/*": ["./*"]
    }
  }
}
```

Through paths, you can notice that all you have to do is modify the path you want to use the mapping method you want.

Now, if you have specified the type of import statement through paths in typescript, you can set the order based on this.

Define your own customization rules by following [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports).

## Maintainers

[@XionWCFM](https://github.com/XionWCFM)

## License

MIT
