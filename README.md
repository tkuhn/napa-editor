Napa Editor
===========

"Napa" stands for NAtive web PApers. It is based on CKEditor and RASH.


CKEditor
--------

Napa Editor is based on CKEditor: http://ckeditor.com

Directory `ckeditor` contains the "Full Package" from the CKEditor website:

    http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.5.1/ckeditor_4.5.1_full.zip

It was retrieved on 23 July 2015.

Excluded files/directories:

    CHANGES.md
    lang/* except for lang/en.js
    plugins/*/dialogs/lang/* except for .../en.js
    samples/*

The following files were changed:

    config.js


RASH
----

Napa Editor uses the RASH format:
https://rawgit.com/essepuntato/rash/master/documentation/index.html

Version 0.3.2 was downloaded to the directory 'rash' on 23 July 2015 from:

    https://rawgit.com/essepuntato/rash/master/rash.zip

Excluded files/directories:

    documentation/*
    examples/*
    fonts/*


Include CKEditor in RASH
------------------------

To include the CKEditor in RASH requires the following few lines:

    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
    <script type="text/javascript" src="ckeditor/config.js"></script>
    <link rel="stylesheet" type="text/css" href="ckeditor/skins/moono/editor_gecko.css">
    <script type="text/javascript" src="ckeditor/lang/en.js"></script>
    <script type="text/javascript" src="ckeditor/styles.js"></script>
    
    <script type="text/javascript" src="client/napa-client.js"></script>

Saving and synchronizing works but might be unstable and buggy...

