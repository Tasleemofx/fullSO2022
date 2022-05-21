const express = require('express')
const router = express.Router()
const contacts = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    },
    {
        "id": 5,
        "name": "Babson Pavyluchenko",
        "number": "45-29-0873473"
    }
]
const generateId = () => {
    const maxId = contacts.length > 0 ? (Math.max(...contacts.map(n => n.id)))
        : 0
    return maxId + 1
}
router.get('/api/contacts', (request, response) => {
    response.json(contacts);
})

router.get("/info", (request, response) => {
    const maxId = contacts.length
    response.end(
        `<p>The phonebook has info for ${maxId} people<br/>
    ${new Date().toLocaleString()}
      </p>`
    )
})

router.get("/api/contacts/:id", (request, response) => {
    const id = Number(request.params.id);
    let contact = contacts.filter(contact => contact.id === id)
    if (contact) {
        return response.send(contact)
    } else {
        return response.status(404).json(
            "error: missing contact")
    }
})


router.post('/api/contacts', (request, response) => {
    const body = request.body
    const note = {
        id: generateId(),
        name: body.name,
        number: body.number
    }
    const [id, name, number] = note
    if(name && number){
     const namefilter = contacts.filter(c=> c.name === name)
     return !namefilter?
     response.send(contacts.concat(note)):
     response.status(400).send({
         // remove id ASAP
         error: `name and number for ${id} must be unique`
     })
    }

})

router.delete('/api/contacts/:id', (req, res) => {
    const id = Number(req.params.id)
    contact = contacts.filter((item) => item.id !== id)
    if (contact) {
        res.send(contact)
    } else {
        res.status(204).end()
    }
})

module.exports = router
