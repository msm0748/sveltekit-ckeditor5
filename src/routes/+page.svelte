<script lang="ts">
	import {
		ClassicEditor,
		Bold,
		Italic,
		Font,
		Paragraph,
		Heading,
		List,
		Table,
		TableColumnResize,
		TableToolbar,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Base64UploadAdapter,
		TodoList,
		Strikethrough,
		Indent,
		Link
	} from 'ckeditor5';

	import 'ckeditor5/ckeditor5.css';
	import { onDestroy, onMount } from 'svelte';

	let editor: ClassicEditor;
	let editorEl: HTMLDivElement;

	onMount(() => {
		if (editorEl) {
			ClassicEditor.create(editorEl, {
				plugins: [
					List,
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
					Base64UploadAdapter,
					TodoList,
					Strikethrough,
					Indent,
					Link
				],
				toolbar: {
					items: [
						'heading',
						'bold',
						'italic',
						'strikethrough',
						'fontColor',
						'|',
						'fontFamily',
						'|',
						'insertTable',
						'insertImage',
						'link',
						'|',
						'bulletedList',
						'numberedList',
						'todoList',
						'indent',
						'outdent'
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

	onDestroy(() => {
		editor.destroy();
	});
</script>

<div id="editor" bind:this={editorEl}></div>
<button
	on:click={() => {
		console.log(editor.getData());
	}}>전송</button
>
