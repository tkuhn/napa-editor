CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'About,Maximize,Flash,Smiley,PageBreak,Iframe,Language,BidiRtl,BidiLtr,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,CreateDiv,Form,HiddenField,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,Source,Save,NewPage,Preview,Print,Templates,Find,Replace,Scayt,BulletedList,NumberedList,Outdent,Blockquote,Indent,Anchor,Table,HorizontalRule,Format,Font,FontSize,ShowBlocks';
};

