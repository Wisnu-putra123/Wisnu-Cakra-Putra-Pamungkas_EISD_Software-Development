function periksa(){
    let nilai = document.getElementById("input").value.toLowerCase();
    let hasil = nilai.split('').reverse().join('');
    if(nilai.length == 0){
        document.getElementById('hasil').innerText = "";
        document.getElementById("kontainer_keterangan").style.backgroundColor="rgb(11, 2, 102)";
    }
    else if(nilai == hasil){
        document.getElementById('hasil').innerText = "Eureka!";
        document.getElementById("kontainer_keterangan").style.backgroundColor="green";
    }
    else{
        document.getElementById("hasil").innerText = "suka blyat";
        document.getElementById("kontainer_keterangan").style.backgroundColor="red";
    }

}
function hapus(){
    document.getElementById("input").value = "";
    document.getElementById("hasil").innerText = "";
    document.getElementById("kontainer_keterangan").style.backgroundColor = "rgb(11, 2, 102)";
}
