module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                appId: "file.opener.application",
                productName: "Opener",
                mac: {
                    "icon": "./build/icon.icns"
                },
                directories: {
                    "buildResources": "build"
                }
            }
        }
    }
}
