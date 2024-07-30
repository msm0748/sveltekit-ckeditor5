import { Buffer } from 'buffer';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { S3_BUCKET_NAME, S3_REGION } from '$env/static/private';
import { s3Client } from './s3Client';

/** 원본 url을 가져옵니다. (보안적으로 좋지 않음) */
export function getPublicUrl(key: string): string {
	const bucketUrl = `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com`;
	return `${bucketUrl}/${key}`;
}

/** 이미지 파일을 버퍼로 변환 */
export const fileToBuffer = async (file: File): Promise<Buffer> => {
	const arrayBuffer = await file.arrayBuffer();
	return Buffer.from(arrayBuffer);
};

/** 파일을 S3에 업로드하고 업로드된 파일의 URL을 반환합니다. */
export async function uploadToS3(file: Buffer, key: string): Promise<string | unknown> {
	const uploadParams = {
		Bucket: S3_BUCKET_NAME,
		Key: key,
		Body: file
	};

	try {
		await s3Client.send(new PutObjectCommand(uploadParams));

		const uploadUrl = getPublicUrl(key);

		return uploadUrl;
	} catch (err) {
		console.log('Error uploading file', err);
		return err;
	}
}
