import { ButtonView, Plugin } from 'ckeditor5';

const icon = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zM9.41 14.42 11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9 8 13.01l1.41 1.41z"></path></svg>`;

export default class FileUpload extends Plugin {
	init() {
		const editor = this.editor;

		// 툴바에 등록할 이름 정의 ex) fileUpload
		editor.ui.componentFactory.add('fileUpload', () => {
			// 새로운 버튼 추가
			const button = new ButtonView();

			button.set({
				label: 'fileUpload',
				icon, // 아이콘을 수정하려면 svg 파일 넣으면 됨
				withText: false,
				tooltip: 'Upload file'
			});

			// 버튼을 클릭하면 콜백함수 실행
			button.on('execute', () => {
				const input = document.createElement('input');
				input.type = 'file';
				input.multiple = true;

				input.onchange = async () => {
					const files = input.files;

					if (files) {
						for (let i = 0; i < files.length; i++) {
							const file = files[i];

							const formData = new FormData();
							formData.append('upload', file);
							try {
								const result = await fetch('/api/upload', {
									method: 'POST',
									body: formData
								});

								const data = await result.json();

								// 파일 전송이 완료되면 URL을 에디터에 삽입
								editor.model.change((writer) => {
									// 현재 커서 위치 또는 선택 영역의 시작 위치를 가져옵니다.
									const insertPosition = editor.model.document.selection.getFirstPosition();

									// 현재 커서 위치에 해당 컨텐츠 삽입
									writer.insertText(data.url, insertPosition!);
								});
							} catch (error) {
								console.error('Error sending data:', error);
							}
						}
					}
				};
				input.click();
			});

			return button;
		});
	}
}
