# Portfolio Website - README

## 1. Technology Stack

This project is built using the following stack:

- **Frontend:** [Next.js]
- **Build Tool:** [Vite](https://vitejs.dev/) for fast development and optimized production builds
- **Package Management:** [npm](https://www.npmjs.com/)
- **Other:** [React Router](https://reactrouter.com/) for navigation

All application logic, UI components, and routing are implemented in React. Styles are modularized for maintainability.

---

## 2. Deployment Strategy

The website is deployed using an **Amazon S3 bucket** as a static site host:

- **Build:** The React app is built using `npm run build`, generating static files in the `out` directory.
- **Upload:** The contents of the `out` folder are uploaded to an S3 bucket configured for static website hosting.
- **Configuration:** The S3 bucket is set with public read permissions and the correct index and error documents (typically `index.html` and `404.html`).
- **Optional:** For custom domains, Route 53 and CloudFront can be integrated for HTTPS and caching.

**Steps:**
1. Build the project: `npm run build`
2. Upload `out/` contents to S3 (via AWS Console, CLI, or CI/CD)
3. Set bucket properties for static hosting
4. (Optional) Configure domain and CDN

---

## 3. CI/CD Workflow

A CI/CD pipeline helps automate build and deployment:

- **Continuous Integration:** On every push to `main`, GitHub Actions runs tests and builds the project.
- **Continuous Deployment:** If the build succeeds, the workflow syncs the `out` folder to the S3 bucket using AWS CLI.

**Sample Workflow Steps:**
1. Checkout code
2. Install dependencies (`npm install`)
4. Build project and export (`npm run build`)
5. Deploy to S3 (`aws s3 sync dist/ s3://your-bucket-name/ --delete`)

**Possible Pitfalls & Solutions:**
- **AWS Credentials:** Ensure secrets are securely stored (e.g., GitHub Secrets) and have minimal permissions.
- **Build Failures:** Monitor workflow logs and set up notifications for failed builds.
- **Bucket Permissions:** Avoid making the bucket fully public; use bucket policies to restrict access as needed.

![workflow in action](image.png)

---

## Summary

This portfolio website leverages a modern React stack, is deployed as a static site on AWS S3, and uses a robust CI/CD pipeline for automated builds and deployments.