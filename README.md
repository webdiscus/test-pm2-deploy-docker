# Test pm2 deploy

Test PM2 deploy into docker container

## 1. Generate SSH Key Pair

```bash
ssh-keygen -t rsa -b 2048 -f deploy_key -N ""
```

## 2. Build and start test container

```bash
docker compose up --build -d
```

If rebuild and run:
```bash
docker compose down -v

docker compose up --build -d
# or w/o cache
docker compose build --no-cache
docker compose up -d
```

## 3. Test SSH Access (from host)

```bash
ssh -i deploy_key -p 2222 dev@localhost
```

## 4. Install PM2 local

The version `6.0.6` contains new dependency `ansis`.

```bash
npm install -g pm2@6.0.6
```

## 5. Deploy setup

```bash
pm2 deploy docker setup
```

## 6. Deploy update

```bash
pm2 deploy docker update
```