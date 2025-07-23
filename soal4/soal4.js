function periksa(){
    
    function duplikat(teks) {
        let dataArray = teks.split(',').map(item => item.trim()); 
        
        for (let i = 0; i < dataArray.length; i++) {
            for (let j = i + 1; j < dataArray.length; j++) {
                if (dataArray[i] === dataArray[j]) {
                    return true; 
                }
            }
        }
        
        return false; 
    }
    
    let nilai = document.getElementById("input").value;

    let hasil = duplikat(nilai);

    if(hasil == true){
        document.getElementById('hasil').innerText = "True";
        document.getElementById("kontainer_keterangan").style.backgroundColor="green";
    }
    else{
        document.getElementById("hasil").innerText = "False";
        document.getElementById("kontainer_keterangan").style.backgroundColor="red";
    }

}
function hapus(){
    document.getElementById("input").value = "";
    document.getElementById("hasil").innerText = "";
    document.getElementById("kontainer_keterangan").style.backgroundColor = "rgb(11, 2, 102)";
}
