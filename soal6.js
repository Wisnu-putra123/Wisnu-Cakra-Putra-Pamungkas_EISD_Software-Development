const pesanan = {};

function pesan(harga, pajak, nama_pesanan){
    let nama = document.getElementById('nama').value;

    if(!(nama in pesanan)){pesanan[nama] = [];}
    
    if(nama == ""){
        alert("Nama kosong atau tidak ada");
    }
    else{
        let harga_pajak = ((pajak / 100) * harga) + harga;
        pesanan[nama].push(harga_pajak);
        alert(`${nama_pesanan} (RP${harga_pajak.toLocaleString()}) berhasil dipesan`);
    }
}

function hitung(){
    let total = 0;
    let nama2 = document.getElementById("nama").value;

    try{
        for(let harga_satuan of pesanan[nama2]){
            total += harga_satuan;
        }
        let pajak_transaksi = ((15 / 100) * total);
        let total_biaya = total + pajak_transaksi;
    
        document.getElementById("hasil").innerHTML = `
        <pre>
        <span><b>${nama2}</b></span>
    
        Total harga makanan: Rp${total.toLocaleString()}
        Pajak Transaksi    : Rp${pajak_transaksi.toLocaleString()}
        Total biaya        : Rp${total_biaya.toLocaleString()}
        </pre>
        `;
    }
    catch{
        alert("Error");
    }
}

function hapus(){
    Object.keys(pesanan).forEach(key => delete pesanan[key]);
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("nama").value = "";
}