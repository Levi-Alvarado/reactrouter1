import { Form, Button, Container } from "react-bootstrap"

function Formulary() {
    return (
        <Container>
            <Form className="text-center">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    )
}

export default Formulary
