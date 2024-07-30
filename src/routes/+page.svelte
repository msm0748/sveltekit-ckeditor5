<script lang="ts">
	import FileUpload from '$lib/ckeditor/FileUpload';
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
		ImageInsert,
		TodoList,
		Strikethrough,
		Indent,
		Link,
		SimpleUploadAdapter,
		Essentials
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
					ImageInsert,
					TodoList,
					Strikethrough,
					Indent,
					Link,
					SimpleUploadAdapter,
					FileUpload
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
						'fileUpload',
						'link',
						'|',
						'bulletedList',
						'numberedList',
						'todoList',
						'indent',
						'outdent'
					]
				},
				heading: {
					options: [
						{
							model: 'heading2',
							view: 'h2',
							title: '제목 1',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h2',
							title: '제목 2',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h3',
							title: '제목 3',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h4',
							title: '제목 4',
							class: 'ck-heading_heading5'
						},
						{ model: 'paragraph', title: '본문', class: 'ck-heading_paragraph' }
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
				},
				simpleUpload: {
					uploadUrl: '/api/upload',
					headers: {
						// ...
					}
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
