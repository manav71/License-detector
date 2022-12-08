## About this tool

As a developer, this tool helps you list out all the licenses used by open source and third-party components present in the codebase and then identify high and medium level risky licenses and gate them informing the developer.

### How to use (go-license-detector)


1. Clone this tool on your device.
2. generate the `output.json` file using `go-license-detecter`.
3. for generating `output.json` file refer [here](https://github.com/ncmsdev/shiftleft-tools/tree/main/license-catcher#about-this-tool).
4. add the `output.json` file to the root director of the cloned project and run the following.
```
node index.js
```
7. a html file `RiskyLicenseList.html` will be generated with information consisting of risky license and files in which they are present.
