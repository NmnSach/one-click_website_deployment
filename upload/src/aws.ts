import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: "629d3639bd273eca6d41bfdaf5a87861",
    secretAccessKey:
        "433a47f0157223b215ec03310183aa48a3a0ef9f87d8bd7b095958bded652f14",
    endpoint: "https://78ad4567f2469c338471ea888bee876b.r2.cloudflarestorage.com",
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercelclone",
        Key: fileName,
    }).promise();
    console.log(response);
}