function periksa(){
    let nama = document.getElementById("input").value;
    const list_nama = JSON.parse(nama);
    const jumlah = {};

    list_nama.forEach(item => {
        jumlah[item] = (jumlah[item] || 0) + 1;
    });

    let jumlah_terbanyak = 0;
    for(let angka of Object.values(jumlah)){
        if(angka > jumlah_terbanyak){
            jumlah_terbanyak = angka;
        }
    }

    const nama_terbanyak = [];
    for(let [nama2, jumlah2] of Object.entries(jumlah)){
        if(jumlah2 === jumlah_terbanyak){
            nama_terbanyak.push(nama2);
        }
    }

    let nama_nakal = "";
    if(jumlah_terbanyak === 1){
        document.getElementById("hasil").innerHTML = "Semuanya anak baik";
        document.getElementById("kontainer_keterangan").style.backgroundColor="green";
    }
    else{
        for(let nama3 in nama_terbanyak){
            if(nama3 == nama_terbanyak.length - 1){
                nama_nakal += nama_terbanyak[nama3] + " ";
            }
            else{
                nama_nakal += nama_terbanyak[nama3] + " dan ";
            }
        }
        nama_nakal += "nackal"
        document.getElementById("hasil").innerHTML = nama_nakal;
        document.getElementById("kontainer_keterangan").style.backgroundColor="red";
    }
}

function hapus(){
    document.getElementById("input").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("kontainer_keterangan").style.backgroundColor="rgb(11, 2, 102)";
}