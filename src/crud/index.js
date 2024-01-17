import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import Table from './Table';
import Formulir from './Formulir';
import './colm.css';  // Impor file CSS

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bukus: [],
      author:'',
      namaPeminjam: '',
      namaBuku: '',
      deskripsi:'',
      tanggalKeluar: '0',
      tanggalMasuk: '',
      harga:'',
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === '') {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            author: this.state.author,
            namaPeminjam: this.state.namaPeminjam,
            namaBuku: this.state.namaBuku,
            deskripsi: this.state.deskripsi,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk,
            harga: this.state.harga


          },

        ],
      });
    } else {
      const updatedBooks = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku
        });

      this.setState({
        bukus: [
          ...updatedBooks,
          {
            id: this.state.bukus.length + 1,
            author: this.state.author,
            namaPeminjam: this.state.namaPeminjam,
            namaBuku: this.state.namaBuku,
            deskripsi: this.state.deskripsi,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk,
            harga: this.state.harga

          },
        ],
      });
    }
    this.setState({
      author:'',
      namaPeminjam: '',
      namaBuku: '',
      deskripsi:'',
      tanggalKeluar: '',
      tanggalMasuk: '',
      harga:'',
      id: '',
    });
  };

  editData = (id) => {
    console.log("id buku", id)
    const updatedBooks = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku
      });

    this.setState({
      author: updatedBooks[0].author,
      namaPeminjam: updatedBooks[0].namaPeminjam,
      namaBuku: updatedBooks[0].namaBuku,
      deskripsi: updatedBooks[0].deskripsi,
      tanggalKeluar: updatedBooks[0].tanggalKeluar,
      tanggalMasuk: updatedBooks[0].tanggalMasuk,
      harga: updatedBooks[0].harga,
      id: updatedBooks[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku
      })

    this.setState({
      bukus: bukuBaru
    })
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container mt-4'>
          <Table bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}