import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { fileToBuffer, uploadToS3 } from '$lib/api/upload';

export const POST: RequestHandler = async ({ request }) => {
	// console.log(request, 'req');

	const formData = await request.formData();
	console.log(formData, 'formData');

	const file = formData.get('upload') as File;

	if (!file) return json({ error: 'No file uploaded' }, { status: 400 });

	const fileName = file.name;

	const key = `uploads/${fileName}`;

	const buffer = await fileToBuffer(file);
	const imageUrl = await uploadToS3(buffer, key);

	return json({ url: imageUrl }, { status: 201 });
};
