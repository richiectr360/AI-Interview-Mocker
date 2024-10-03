/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-Interview-Mocker_owner:HMWrx0AVRj1o@ep-round-mountain-a5iqlf85.us-east-2.aws.neon.tech/ai-Interview-Mocker?sslmode=require',
    }
  };