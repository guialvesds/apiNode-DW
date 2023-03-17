import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.set('strictQuery', true)

const connectDb = () => {
  console.log("Aguarde, conectando ao banco de dados...");

  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@diarioweb.wgvybow.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Conectado ao banco de dados com sucesso!");
    })
    .catch((error) =>
      console.log("Não foi possível conectar ao banco de dados ", error)
    );
};



export default connectDb;
