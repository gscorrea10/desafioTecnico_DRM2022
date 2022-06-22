import express from "express";
import routes from "./modules/routes";

const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

/*app.post('/clients', async (req, res) => {
  const { name, adress, phone } = req.body;

  const client = await prisma.client.create({
    data: {
      name,
      adress,
      phone
    }
  });

  return res.status(201).json({ data: client });
});

app.get('/clients', async (req, res) => {

  const clients = await prisma.client.findMany
  return clients.length > 0
    ? res.status(200).json(clients)
    : res.status(204).send();

});

app.put('/clients/:id', async (req, res) => {

});

app.delete('clients/:id', async (req, res) => {

});*/

app.listen(PORT, () => console.log("Server on!!"));