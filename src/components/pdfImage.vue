<template>
    <div ref="thumbnail">
<!--        <v-img-->
<!--                :src="filePath"-->

<!--                aspect-ratio="1"-->
<!--                class="grey lighten-2"-->
<!--                max-width="500"-->
<!--                max-height="300"-->
<!--        ></v-img>-->
        {{filePath}}
    </div>
</template>

<script>
    // // import * as types from '../store/types';
    // // import pdfjsLib from 'pdfjs';
    // // const { pdfjsLib } = require('pdfjs');
    // // const { s/**/hell } = require('electron');
    // var thumb = require('node-thumbnail').thumb;
    const remote = require('electron').remote;
    const app = remote.app;
    console.log(app.getPath('userData'));

    // const fs = require("fs");
    // var im = require('imagemagick');
    // const pdf = require('pdf-thumbnail');
    const fs = require('fs');
    // const pdf = require('pdf-parse');
    // change to my uuid
    var uuidv4 = require('uuid/v4');

    // console.log(app.getPath('userData'));

    // const PREVIEW_PATH = './previewBuffer.jpg'

    export default {

        props: ['path'],
        data: () => ({
            filePath: ''
        }),
        mounted() {

            // var filename = uuidv4() + '.jpg';

            if (!fs.existsSync(app.getPath('userData') + '/thumbnails/')){
                fs.mkdirSync( app.getPath('userData') + '/thumbnails/');
            }

            const filePath = app.getPath('userData') + '/thumbnails/' + uuidv4() + '.jpg';


            PDFJS.getPdf(this.path, function getPdfHelloWorld(data) {
                //
                // Instantiate PDFDoc with PDF data
                //
                var pdf = new PDFJS.PDFDoc(data);
                var page = pdf.getPage(1);
                var scale = 1.5;

                //
                // Prepare canvas using PDF page dimensions
                //
                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = page.height * scale;
                canvas.width = page.width * scale;

                //
                // Render PDF page into canvas context
                //
                page.startRendering(context);
            });

            console.log('filePath',filePath)

            // var fs = require('fs');

            // let options = {
            //
            //     // max page number to parse
            //     max: 1,
            //
            // }

            // let dataBuffer = fs.readFileSync('path to PDF file...');
            //
            // pdf(dataBuffer,options).then(function(data) {
            //     //use new format
            // });


            // let dataBuffer = fs.readFileSync(this.path);

            // pdf(options, dataBuffer).then(function(data) {
            //
            //     // number of pages
            //     console.log(data);
            //     // // number of rendered pages
            //     // console.log(data.numrender);
            //     // // PDF info
            //     // console.log(data.info); м
            //     // // PDF metadata05-versions-space.pdf
            //     // console.log(data.metadata);
            //     // // PDF.js version
            //     // // check https://mozilla.github.io/pdf.js/getting_started/
            //     // console.log(data.version);
            //     // // PDF text
            //     // console.log(data.text);
            //
            // });


            // const previewImageName = this.path.split('/').join('').replace(/\//g, "-");
            // console.log('this.path', this.path.split('.').join("").replace(/\//g, "-"));
            // pdf(fs.readFileSync(this.path))
            //     .then(data /*is a stream*/ => {data.pipe(fs.createWriteStream(filePath))})
            //     .catch(err => console.error(err))


            this.filePath = filePath;
            // const pdfBuffer = require('fs').readFileSync(this.path);

            // pdf(pdfBuffer, {
            //     compress: {
            //         type: 'JPEG',  //default
            //         quality: 70    //default
            //     }
            // })
            //     .then(data /*Stream of the image*/ => {
            //        console.log('data', data)
            //     })
            //     .catch(err => console.log(err))
        },
        methods: {

        },
    }
</script>
