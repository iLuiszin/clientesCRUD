const clientes = [
  {
    id: 1,
    nome: 'Vitor',
    email: 'teste@example.com',
    telefone: '61 923456789',
  },
  { id: 2, nome: 'João', email: 'teste@example.com', telefone: '61 923456789' },
  {
    id: 3,
    nome: 'Maria',
    email: 'teste@example.com',
    telefone: '61 923456789',
  },
  {
    id: 4,
    nome: 'Pedro',
    email: 'teste@example.com',
    telefone: '61 923456789',
  },
  { id: 5, nome: 'Luís', email: 'teste@example.com', telefone: '61 923456789' },
]

const findClientById = (id) => {
  return clientes.find((cliente) => cliente.id === parseInt(id))
}

const clientController = {
  getClients: (req, res) => {
    return res.status(200).send(clientes)
  },

  getOneClient: (req, res) => {
    const id = req.params.id

    const cliente = findClientById(id)

    if (!cliente) {
      return res
        .status(404)
        .send({ message: 'Não foi encontrado um cliente para esse id' })
    }

    return res.status(200).send(cliente)
  },

  createClient: (req, res) => {
    const { nome, email, telefone } = req.body

    if (!nome) {
      return res.status(400).send({
        message: 'O campo nome é obrigatório',
      })
    }

    const id = clientes[clientes.length - 1].id + 1

    const cliente = {
      id,
      nome,
      email,
      telefone,
    }

    clientes.push(cliente)

    return res.status(201).send(cliente)
  },

  updateClient: (req, res) => {
    const { id } = req.params
    const { nome, email, telefone } = req.body

    if (!nome) {
      return res.status(400).send({
        message: 'O campo nome é obrigatório',
      })
    }

    const cliente = findClientById(id)

    if (!cliente) {
      return res
        .status(404)
        .send({ message: 'Não foi encontrado um cliente para esse id' })
    }

    cliente.nome = nome
    cliente.email = email
    cliente.telefone = telefone

    return res.status(200).send(cliente)
  },

  removeClient: (req, res) => {
    const { id } = req.params

    const cliente = findClientById(id)

    if (!cliente) {
      return res
        .status(404)
        .send({ message: 'Não foi encontrado um cliente para esse id' })
    }

    clientes.splice(clientes.indexOf(cliente), 1)

    return res.status(200).send({ message: 'cliente removido' })
  },
}

module.exports = clientController
