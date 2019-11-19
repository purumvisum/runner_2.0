module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ['imagemagick', 'ghostscript'],
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
