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
                            {/* COLUNA ESQUERDA */}
                            <Col md={6}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={nome}
                                        onChange={e => setnome(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>CNPJ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={cnpj}
                                        onChange={e => setcnpj(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={e => setemail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={telefone}
                                        onChange={e => settelefone(e.target.value)}
                                    />
                                </Form.Group>

                            </Col>

                            {/* COLUNA DIREITA */}
                            <Col md={6}>

                                <Form.Group className="mb-3">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={cep}
                                        onChange={e => setcep(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Logradouro</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={logradouro}
                                        onChange={e => setlogradouro(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={numero}
                                        onChange={e => setnumero(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={bairro}
                                        onChange={e => setbairro(e.target.value)}
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={8}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Cidade</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={cidade}
                                                onChange={e => setcidade(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>UF</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={uf}
                                                onChange={e => setuf(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CadastrarFornecedor