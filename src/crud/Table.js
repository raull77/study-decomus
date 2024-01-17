import React from 'react';
import Table from 'react-bootstrap/Table';
import './colm.css';  // Impor file CSS


const Table1 = ({bukus, editData, hapusData}) => {



    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Nama Peminjam</th>
                    <th>Nama Buku</th>
                    <th>Deskripsi</th>
                    <th>Tanggal Keluar</th>
                    <th>tanggal Masuk</th>
                    <th>Harga</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            <tbody>
                {bukus.map((buku, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{buku.author}</td>
                            <td>{buku.namaPeminjam}</td>
                            <td>{buku.namaBuku}</td>
                            <td>{buku.deskripsi}</td>
                            <td>{buku.tanggalKeluar}</td>
                            <td>{buku.tanggalMasuk}</td>
                            <td>{buku.harga}</td>
                            <td>
                                <button className='btn btn-warning mr-1' onClick={() => editData(buku.id)}>Edit</button>
                                <button className='btn btn-warming mr-1' onClick={() => hapusData(buku.id)}>Hapus</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    );
}

export default Table1;
