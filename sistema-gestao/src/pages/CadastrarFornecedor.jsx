import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useState } from 'react'

const CadastrarFornecedor = () => {

    const [nome, setnome] = useState("")
    const [cnpj, setcnpj] = useState("")
    const [email, setemail] = useState("")
    const [telefone, settelefone] = useState("")
    const [cep, setcep] = useState("")
    const [logradouro, setlogradouro] = useState("")
    const [numero, setnumero] = useState("")
    const [bairro, setbairro] = useState("")
    const [cidade, setcidade] = useState("")
    const [uf, setuf] = useState("")

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0 text-white">
                    <i className="bi bi-building me-2"></i>
                    Novo fornecedor
                </h2>
            </div>
            <Card className="shadow-sm border-0">
                <Card.Body className='p-4'>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className='m6-3'>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                                <Form.Group className='m6-3'>
                                    <Form.Label>CNPJ</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                                <Form.Group className='m6-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                                <Form.Group className='m6-3'>
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CadastrarFornecedor