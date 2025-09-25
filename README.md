# Portfolio Website - README

https://davidagbemuko.com

## Overview
This project implements a frontend website as part of my Cloud Resume Challenge. The website serves as the presentation layer, providing a clean and responsive user interface to display my resume and interactive features. It is designed with modern frontend development practices and integrates with cloud-based backend services to meet the full-stack requirements of the challenge.

## 1. Key Features  

- **Cloud Integration:** The website is hosted on an **Amazon S3 bucket** and served through **AWS CloudFront** for secure, low-latency global distribution. It connects to a backend service built on an **AWS serverless architecture**.  
- **Visitor Counter:** Displays a **dynamic visitor count**, retrieved via a public API exposed through **AWS API Gateway** and powered by serverless compute with persistent storage.  
- **CI/CD Pipeline:** Implements an **automated deployment pipeline**, ensuring changes are delivered with **speed, repeatability, and reliability**.  


## 1. Technology Stack

This project is built using the following stack:

- **Frontend:** [Next.js]
- **Build Tool:** [Vite](https://vitejs.dev/) for fast development and optimized production builds
- **Route 53:** to serve as the **DNS hosted zone**, and manage the authoritative name servers for my domain
- **ACM Certificate:** Provides an **SSL/TLS certificate** via **AWS Certificate Manager (ACM)** to enable secure HTTPS communication for the website.  
- **CloudFront Distribution:** Acts as a **content delivery network (CDN)** to cache and distribute content globally with low latency, while also integrating with ACM to enforce HTTPS.  
- **Package Management:** [npm](https://www.npmjs.com/)

---
## 2. Architecture
- **Provider:** AWS
- **Resources:** S3 Bucket, IAM Policy, AWS CloudFront, ACM Certificate, Route 53

![Architecture Diagram](image-1.png)

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