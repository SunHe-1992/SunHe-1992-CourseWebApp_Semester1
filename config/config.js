const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "xOP1xIn9dsTag1in",
    // mongoUri: process.env.MONGODB_URI || "mongodb+srv://hsun67:xOP1xIn9dsTag1in@cluster0.t8yl8hb.mongodb.net/Skeleton?retryWrites=true&w=majority"||
    mongoUri: "mongodb+srv://hsun67:xOP1xIn9dsTag1in@cluster0.t8yl8hb.mongodb.net/Skeleton?retryWrites=true&w=majority"
}
export default config
