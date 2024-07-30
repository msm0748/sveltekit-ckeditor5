import { S3_ACCESS_KEY_ID, S3_REGION, S3_SECRET_ACCESS_KEY } from '$env/static/private';
import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = new S3Client({
	region: S3_REGION, // ex) 'ap-northeast-2'
	credentials: {
		accessKeyId: S3_ACCESS_KEY_ID,
		secretAccessKey: S3_SECRET_ACCESS_KEY
	}
});
