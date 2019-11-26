# NgRxDemo


### Installing ngrx libraries:
```shell script
npm install @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools
json-server --watch data.json
```

### Packing custom library
To create compressed file for publishing:
```shell script
ng build <library-name>
npm pack
npm publish --registry=http://localhost:4873
```

### Installing custom library
This project uses **dope-table** library published locally in Verdaccio. To install run Verdaccio & point to that registry:
```shell script
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
cd library
npm publish  --registry=http://localhost:4873
npm install dope-table --registry=http://localhost:4873
```

### Starting Backend
Uses json-server for backend. Start using:
```shell script
json-server --watch data.json
```
