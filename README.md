# fullstack app

Explain your service in here. This is fulltsack project related Payment using golang as backend and nuxt as frontend....

list of tools version of your machine:

```bash
go version go1.26.1 darwin/arm64
node v24.14.1
```

Install all related requirements:

```bash
go mod tidy
pnpm install
```

How to run backend server on local:

```bash
cd backend
cp env.sample .env
make dep
make gen-secret
make run
```

How to run backend server on production build:

```bash
make dep
make gen-secret
make run
```

How to run frontend on local:

```bash
create .env
cp inside file from .env.example
pnpm run dev
then open http://localhost:3000
```

How to run frontend on production build:

```bash
running Dockerfile
```

To checking openapi documentations, you can visit this url after backend running.

```bash
Add here
```

Login to frontend by visiting:

```bash
open http://localhost:3000
user:
admin@yopmail.com
cs@yopmail.com

password: p4ssw0rd
```

evidences: Add video evidences of your service
see backend [README.md](backend/README.md)
see frontend [README.md](frontend/README.md)
