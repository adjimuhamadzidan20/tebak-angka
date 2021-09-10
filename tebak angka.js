// tebak angka
var cobalagi = true;

while(cobalagi == true) {
	
	var angka_yang_benar = 7;
	var kesempatan = 2;

	for(kesempatan = 2; kesempatan >= 0; kesempatan-- ) {
		
		alert('permainan tebak angka 1 / 10\nkesempatan 3X');
		
		var user = parseInt(prompt('masukan angka tebakan : '));

		if(user == angka_yang_benar) {
			alert('angka yang ditebak benar, angka '+ angka_yang_benar);
			break;
		}

		else if (user > 0 && user <= 5) {
			alert('angka yang ditebak nilainya begitu kecil');
			if(kesempatan > 0) {
				alert('kesempatan '+kesempatan);
			}

			else {
				alert('kesempatan habis');
			}
		} 

		else if (user > 5 && user <= 8 ) {
			alert('sedikit lagi, angka yang ditebak masih kurang tepat');
			if(kesempatan > 0) {
				alert('kesempatan '+kesempatan);
			}

			else { 
				alert('kesempatan habis');
			}
		}

		else if (user > 8 && user <= 10) {
			alert('angka yang ditebak nilainya begitu besar');
			if(kesempatan > 0) {
				alert('kesempatan '+kesempatan);
			}

			else { 
				alert('kesempatan habis');
			}
		}

		else if (user > 10) {
			alert('maaf angka yang anda tebak melebihi ketentuan\nkarena hanya sampai 10');
			break;
		}

		else {
			alert('maaf, inputan tidak sesuai');
			break;
		}
	}

	cobalagi = confirm('mulai lagi? ');

}

alert('terimakasih');
// solved!!