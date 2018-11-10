# climod-add-script

CLI codemod to add a script entry to `package.json`.

```shell
climod-add-script --name test --cmd jest
```

Now your `package.json` has this entry.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```
