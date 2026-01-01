# Deployment Guide

This project can be deployed in multiple ways: Docker, GitHub Pages, or any static hosting service.

## Docker Deployment

### Prerequisites
- Docker installed on your system
- Docker Hub account (for pushing images)

### Local Build and Run

Build the Docker image:
```bash
docker build -t prefiller-landing .
```

Run the container:
```bash
docker run -p 8080:80 prefiller-landing
```

Visit `http://localhost:8080` to view the application.

### Docker Hub Deployment (Automated)

The project uses GitHub Actions to automatically build and push to Docker Hub when code is pushed to the `dev` branch.

**Required GitHub Secrets:**
- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_PASSWORD`: Your Docker Hub access token

To set up secrets:
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the required secrets

**Workflow file:** `.github/workflows/docker-push.yml`

The image will be pushed as: `<username>/prefiller-landing:latest`

### Pull and Run from Docker Hub

```bash
docker pull <your-username>/prefiller-landing:latest
docker run -p 8080:80 <your-username>/prefiller-landing:latest
```

## GitHub Pages Deployment

The project automatically deploys to GitHub Pages when code is pushed to the `main` branch.

**Setup Steps:**
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to `main` branch to trigger deployment

**Workflow file:** `.github/workflows/github-pages.yml`

Your site will be available at: `https://<username>.github.io/<repo-name>/`

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Environment Configuration

### GitHub Pages Base Path

If your GitHub Pages site is served from a subdirectory (e.g., `https://username.github.io/repo-name/`), update `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/repo-name/', // Add this line
  // ... rest of config
}));
```

### Production Build

Build the project locally:
```bash
npm install
npm run build
```

The output will be in the `dist` directory.

## Nginx Configuration

The included `nginx.conf` provides:
- SPA routing support (fallback to index.html)
- Gzip compression
- Security headers
- Static asset caching
- Health check endpoint at `/health`

## Troubleshooting

### Docker Build Issues
- Ensure all dependencies are listed in `package.json`
- Check that `npm run build` works locally first

### GitHub Pages 404 Errors
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that the workflow has Pages deployment permissions

### Nginx Routing Issues
- Ensure `try_files` directive includes `/index.html` fallback
- Clear browser cache after deploying changes

## Health Checks

### Docker Container
```bash
curl http://localhost:8080/health
```

Should return: `healthy`

## Security Notes

- Never commit `.env` files with secrets
- Use GitHub Secrets for sensitive values
- Keep dependencies updated regularly
- Review security headers in `nginx.conf`
