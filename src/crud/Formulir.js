import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './colm.css';  // Impor file CSS

const Formulir = ({ author,namaPeminjam, namaBuku,deskripsi, tanggalKeluar, tanggalMasuk, harga, handleChange, handleSubmit,id }) => {
    return (
        <div className='mt-5'>
            <Row>
                <Col>
                    <h4>{id ? "edit data":"Tambah Data"}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        {/* Bagian 1: Informasi Buku */}
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center" controlId="nama">
                                 <Form.Label id='labelFrom'>Author</Form.Label>
                                 <Form.Control id='inputFrom' type="text" name='author' value={author} onChange={(event) =>
                                 handleChange(event)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 text-center" controlId="nama">
                                 <Form.Label id='labelFrom'>Nama peminjam</Form.Label>
                                 <Form.Control id='inputFrom' type="text" name='namapeminjam' value={namaPeminjam} onChange={(event) =>
                                 handleChange(event)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                < Form.Group className="mb-3 text-center" controlId="nama">
                                 <Form.Label id='form-label'>Nama Buku</Form.Label>
                                 <Form.Control id='inputFrom' type="text" name='nama' value={namaBuku} onChange={(event) =>
                                 handleChange(event)} />
                               </Form.Group>
                           </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 text-center" controlId="deskripsi">
                                 <Form.Label id='labelFrom'>Deskripsi</Form.Label>
                                 <Form.Control id='inputFrom' type="textarea" name='deskripsi' value={deskripsi} onChange={(event) =>
                                 handleChange(event)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 text-center" controlId="tanggalkeluar">
                                 <Form.Label id='labelFrom'>Tanggal Keluar</Form.Label>
                                 <Form.Control id='inputFrom' type="date" name='tanggalkeluar' value={tanggalKeluar} onChange={(event) =>
                                 handleChange(event)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                < Form.Group className="mb-3 text-center" controlId="tanggal masuk">
                                 <Form.Label id='form-label'>Tanggal Masuk</Form.Label>
                                 <Form.Control id='inputFrom' type="date" name='tanggalmasuk' value={tanggalMasuk} onChange={(event) =>
                                 handleChange(event)} />
                               </Form.Group>
                           </Col>
                            <Col>
                                < Form.Group className="mb-3 text-center" controlId="harga">
                                 <Form.Label id='form-label'>Harga</Form.Label>
                                 <Form.Control id='inputFrom' type="number" name='harga' value={harga} onChange={(event) =>
                                 handleChange(event)} />
                               </Form.Group>
                           </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>

    );
}

export default Formulir;