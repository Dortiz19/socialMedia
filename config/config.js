const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "987",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      'mongodb+srv://diego1234:diego1234@cluster0.frgvx.mongodb.net/reactnode?authSource=admin&replicaSet=atlas-1iy69z-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
  }
  
  export default config;