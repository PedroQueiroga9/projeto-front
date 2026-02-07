import { Button } from 'react-bootstrap'
import React from 'react'

const Fornecedores = () => {
    return (
        <div>
            <div className="d=-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0 text-white">
                    <i className="bi bi-building me-2"></i>
                    Fornecedores
                </h2>
                <Button variant='light'> 
                    Novo Fornecedor 
                </Button>
            </div>
        </div>
    )
}

export default Fornecedores