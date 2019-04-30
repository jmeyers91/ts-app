# Setup

Clone and install node dependencies.

```
git clone https://github.com/jmeyers91/ts-app.git
cd ts-app
npm install
```

Setup your custom env (optional).

```
cp .env.example .env
```

## Scripts

### Start

Start the server. Watches and restarts on file changes in dev environments.

```
npm run start
```

### Migrate

Run database migrations.

```
npm run migrate
```

### Seed

Run database seeds.

```
npm run seed
```

### Test

```
npm run test
```

### Scaffold project files (models, migrations, routers, etc.)

```
plop
```
