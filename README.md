
  # Kirin University Website

  This is a code bundle for Kirin University Website. The original project is available at https://www.figma.com/design/ERY3knY37fm28oWfTSrD4k/Kirin-University-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Publishing

Live site: https://jangj864.github.io/kirun_university/

Push changes to `main` to build and publish automatically through GitHub Actions.
The workflow installs dependencies with `npm ci`, builds the site, and deploys
`dist` to GitHub Pages. Client routes use hashes so links and refreshes work on
static hosting (for example, `/#/about`).

To verify the production build locally:

```sh
npm ci
VITE_BASE_PATH=/kirun_university/ npm run build
```
  
