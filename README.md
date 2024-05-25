# One-click Website Deployment Tool

Deploy your **React and Next.js** projects effortlessly with our One-Click Website Deployment Tool. Simply upload your GitHub repository link, and the tool automates the entire process, making deployments fast, easy, and efficient. Perfect for developers of all levels.


# Getting Started

The project uses cloudflare to upload files. In order to use it, you'll need to create a cloudflare account and create an R2 bucket. Replace the credentials of this bucket with the ones provided in the project. 

You also need to have a redis server running locally on your system. If you're  using windows, you can download redis from <a href="https://github.com/tporadowski/redis/releases"> here </a>

How to run locally - 

1. Clone the repository locally on your machine.
2. There are 3 backend services that you will need to run the tool locally.
3. run "cd deploy" and "node dist/index.js" to run the deployment service.
4. run "cd upload" and "node dist/index.js" to run the upload server.
5. run "cd request-handler" and "node dist/index.js" to run the request-handling service.
6. Finally, run "cd frontend" and "npm run dev" to run the frontend on localhost:5173

