## Astro + microCMS + minio

## docker command
```
docker build -t <projectname> .
docker run -p 4321:4321 <projectname>
```
## docker compose command
```sh
docker compose build 
docker compose up -d
```

(http://localhot:4321)



## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
├── tsconfig.json
├── Dockerfile
└── Docker-compose.yml
```

