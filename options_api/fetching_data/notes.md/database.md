Todo: 

link for further instructions: https://github.com/typicode/json-server

make a folder to carry our database json file
```sh
mkdir data
```
|- db.json (store in database folder)

make our data  we can also add more information as an example
```json
{
    "jobs": [
        { "title": "Ninja UX Designer", "id": 1, "details": "lorem" },
        { "title": "Ninja Web Developer", "id": 2, "details": "lorem" },
        { "title": "Ninja Vue Developer", "id": 3, "details": "lorem" }
    ],
    "blogs": []
}
```

download json-server
```sh
--------------------------------------
mac:      | sudo npm i -g json-server |
--------------------------------------
windows:  | npm i -g json-server      |
--------------------------------------
```

create another terminal and start the json-server
```sh
json-server --watch (database folder)/db.json
```

