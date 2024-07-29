<script lang="ts">
	import {
		ClassicEditor,
		Essentials,
		Bold,
		Italic,
		Font,
		Paragraph,
		Heading,
		Table,
		TableColumnResize,
		TableToolbar,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Base64UploadAdapter
	} from 'ckeditor5';

	import 'ckeditor5/ckeditor5.css';
	import { onMount } from 'svelte';

	let editor: ClassicEditor;
	let editorEl: HTMLDivElement;

	onMount(() => {
		if (editorEl) {
			ClassicEditor.create(editorEl, {
				plugins: [
					Essentials,
					Bold,
					Italic,
					Font,
					Paragraph,
					Table,
					Heading,
					Table,
					TableColumnResize,
					TableToolbar,
					Image,
					ImageCaption,
					ImageResize,
					ImageStyle,
					ImageToolbar,
					ImageUpload,
					Base64UploadAdapter
				],
				toolbar: {
					items: [
						'heading',
						'|',
						'undo',
						'redo',
						'|',
						'bold',
						'italic',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'insertImage',
						'insertTable'
					]
				},
				table: {
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
				},
				image: {
					toolbar: [
						'imageStyle:inline',
						'imageStyle:wrapText',
						'imageStyle:breakText',
						'|',
						'imageTextAlternative',
						'toggleImageCaption'
					]
				}
			})
				.then((newEditor) => {
					editor = newEditor;
				})
				.catch(/* ... */);
		}
	});
</script>

<div id="editor" bind:this={editorEl}></div>
<button
	on:click={() => {
		console.log(editor.getData());
	}}>전송</button
>
