# NgRxDemo

### Installing ngrx libraries:

```shell script
npm install @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools
json-server --watch data.json
```

### Setting up custom library

```shell script
ng new <application-name> --create-application=false
ng generate library <library-name> --prefix=rpa
ng generate application <application-name>
ng build <library-name> --watch
```

### Packing custom library

To create compressed file for publishing:

```shell script
ng build <library-name>
cd dist/<library-name>
npm pack
npm publish --registry=http://localhost:4873
```

### Publishing custom library

This project uses **dope-table** library published locally in Verdaccio. To install run Verdaccio & point to that registry:

```shell script
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
npm adduser --registry http://localhost:4873
cd library
npm publish --registry=http://localhost:4873
npm install dope-table --registry=http://localhost:4873
```

### Starting json-server Backend

Uses json-server for backend. Start using:

```shell script
json-server --watch data.json
```


### Starting Flask Backend

```shell script
cd backend
virtualenv venv
source venv/bin/activate
pip3 install -r requrements.txt
python3 __init__.py
```

___
## References
* [The Angular Library Series - Creating a Library with Angular CLI](https://medium.com/angular-in-depth/creating-a-library-in-angular-6-87799552e7e5)
* [Angular Workspace: No Application for You!](https://medium.com/angular-in-depth/angular-workspace-no-application-for-you-4b451afcc2ba)
* [NgRx Official Site](https://ngrx.io/guide/store)