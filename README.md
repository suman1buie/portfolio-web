# portfolio-web
Portfolio website v2.0

Created using AI agent

## Deployment Setup (GitHub Pages)

Before the deploy workflow can run successfully, you must configure GitHub Pages **once** in your repository settings:

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Click **Pages** (left sidebar, under "Code and automation")
4. Under **Build and deployment** → **Source**, open the dropdown and select **GitHub Actions**
5. That's it — no further configuration is needed on this page

After this one-time setup, every push to `main` will automatically build and deploy the site via the workflow in `.github/workflows/deploy.yml`.
