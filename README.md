# Contributing

Pull requests with constructive feedback welcomed.
Start by forking & cloning this repository.

## Rails Server: install dependencies, prepare the database

```bash
bundle install
rails db:setup
```

## React Frontend: install dependencies

```bash
cd client
npm install
```

## Start Servers

[Foreman gem](https://www.rubydoc.info/gems/foreman/0.87.2) ([not](https://github.com/ddollar/foreman/wiki/Don't-Bundle-Foreman) included in Gemfile), Procfile, and bin/start.sh allow for simple local app startup.

```bash
gem install foreman
chmod u+x bin/start.sh
bin/start.sh
```
