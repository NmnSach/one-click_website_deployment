import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3({
    accessKeyId: "629d3639bd273eca6d41bfdaf5a87861",
    secretAccessKey:
        "433a47f0157223b215ec03310183aa48a3a0ef9f87d8bd7b095958bded652f14",
    endpoint: "https://78ad4567f2469c338471ea888bee876b.r2.cloudflarestorage.com",
});

const app = express();

app.get("/*", async (req, res) => {
    // id.100xdevs.com
    const host = req.hostname;

    const id = host.split(".")[0];
    const filePath = req.path;

    const contents = await s3.getObject({
        Bucket: "vercelclone",
        Key: `dist/${id}${filePath}`,
    }).promise();

    const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", type);

    res.send(contents.Body);
})

app.listen(3001);