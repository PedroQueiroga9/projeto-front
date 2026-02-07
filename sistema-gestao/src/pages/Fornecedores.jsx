import { Button, Card, Col, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fornecedores = () => {

    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => { carregarFornecedores }, [])

    const carregarFornecedores = () => {
        axios.get("http://localhost:3000/fornecedores")
            .then(response => setFornecedores(response.data))
            .catch(error => console.error("Erro a carregar fornecedores", error))
    }

    return (
        <div>
            <div className="d=-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0 text-white">
                    Fornecedores
                </h2>
                <Button variant='light'>
                    <i className="bi bi-building me-2"></i>
                    Novo Fornecedor
                </Button>

            </div>
            <Row className='g-4'>
                {
                fornecedores.map(fornecedor => (
                    <Col md={6} lg={4} key={fornecedor.id}>
                            <Card className="h-100 shadow-sm border-0"> </Card>
                    </Col>
                ))
                }
            </Row>
        </div>
    )
}

export default Fornecedores