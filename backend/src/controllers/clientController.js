const clientes = [
  { id: 1, nome: 'Vitor' },
  { id: 2, nome: 'João' },
  { id: 3, nome: 'Maria' },
  { id: 4, nome: 'Pedro' },
  { id: 5, nome: 'Luís' },
]

const clientController = {
  getClients: (req, res) => {
    return res.status(200).send(clientes)
  },

  getOneClient: (req, res) => {
    const id = req.params.id

    const cliente = clientes.find((cliente) => cliente.id == Number(id))

    if (cliente) {
      return res.status(200).send(cliente)
    }

    return res.status(404).send('Cliente não encontrado')
  },

  createClient: (req, res) => {
    const { nome } = req.body

    if (!nome) {
      return res.status(400).send('Nome não informado')
    }

    const id = clientes[clientes.length - 1].id + 1

    const cliente = {
      id,
      nome,
    }

    clientes.push(cliente)

    return res.status(201).send(cliente)
  },
}

module.exports = clientController
