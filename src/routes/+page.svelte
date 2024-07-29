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
				fontFamily: {
					options: [
						'default',
						'Arial, Helvetica, sans-serif',
						'Georgia, serif',
						{
							title: '나눔고딕',
							model: 'Nanum Gothic, sans-serif',
							view: {
								name: 'span',
								styles: {
									'font-family': 'Nanum Gothic, sans-serif'
								}
							}
						},
						{
							title: '고운돋움',
							model: 'Gowun Dodum, sans-serif',
							view: {
								name: 'span',
								styles: {
									'font-family': 'Gowun Dodum, sans-serif'
								}
							}
						},
						{
							title: '고운바탕',
							model: 'Gowun Batang, sans-serif',
							view: {
								name: 'span',
								styles: {
									'font-family': 'Gowun Batang, sans-serif'
								}
							}
						}
					],
					supportAllValues: true
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
