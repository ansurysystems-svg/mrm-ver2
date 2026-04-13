# Deployment Guide: Cloudflare Pages

This guide outlines the steps to deploy the MRM Advocates website to Cloudflare Pages.

## Prerequisites

1.  A [Cloudflare account](https://dash.cloudflare.com/sign-up).
2.  Your project code pushed to a Git provider (GitHub, GitLab, or Bitbucket).

## Deployment Steps

### 1. Connect your Repository

1.  Log in to the Cloudflare dashboard.
2.  Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3.  Select your Git provider and authorize Cloudflare.
4.  Select the repository for this project.

### 2. Configure Build Settings

Once you've selected the repository, configure the following build settings:

*   **Project name**: `mrm-advocates` (or your preferred name)
*   **Production branch**: `main` (or your default branch)
*   **Framework preset**: `Vite`
*   **Build command**: `npm run build`
*   **Build output directory**: `dist`

### 3. Environment Variables (Optional)

If you have any environment variables (e.g., for future API integrations), add them under the **Environment variables** section during setup or later in the project settings.

### 4. Deploy

Click **Save and Deploy**. Cloudflare will start building your project. Once finished, you'll receive a unique `*.pages.dev` URL.

### 5. Custom Domain (Recommended)

To use your own domain (e.g., `mrmadvocates.co.ke`):

1.  In the Cloudflare Pages project dashboard, go to the **Custom domains** tab.
2.  Click **Set up a custom domain**.
3.  Enter your domain name and follow the instructions to update your DNS records.

## Handling Client-Side Routing (SPA)

Since this is a Single Page Application (SPA), you need to ensure that all requests are redirected to `index.html` so that React Router can handle them.

1.  Create a file named `_redirects` in the `public/` directory of your project.
2.  Add the following content to the file:
    ```text
    /*  /index.html  200
    ```
3.  Commit and push this change. Cloudflare Pages will automatically pick it up and handle routing correctly.

## Troubleshooting

*   **Build Failures**: Check the build logs in the Cloudflare dashboard for specific error messages. Ensure all dependencies are correctly listed in `package.json`.
*   **404 on Refresh**: Ensure the `_redirects` file is present in the `dist` folder after build (putting it in `public/` ensures this in Vite).
