const feedback  = [];

function kirim(){
    let input = document.getElementById("input");
    let rating = Number(input.value);

    if (rating > 0 && rating <= 10){
        feedback.push(rating);
        let jumlah = 0;
        for(let nilai of feedback){
            jumlah += nilai;
        }
        let rata_rata = (jumlah/feedback.length).toFixed(2);

        document.getElementById("rendah").innerText = Math.min(...feedback);
        document.getElementById("tinggi").innerText = Math.max(...feedback);
        document.getElementById("rata-rata").innerText = rata_rata;
        document.getElementById("input").value = null;
    }
    else{
        alert("Masukkan angka 1 sampai 10")
    }   
}
    
function hapus(){
    feedback.length=0;
    document.getElementById("rendah").innerText = 0;
    document.getElementById("tinggi").innerText = 0;
    document.getElementById("rata-rata").innerText = 0;
}