/*
  BANK SOAL GURU
  Tambahkan soal dengan pola yang sama sampai 30 butir pada setiap bank.
  type: 'pg' | 'pgk' | 'essay'
  answer untuk pg adalah index pilihan (0-based), pgk adalah array index,
  essay memakai keywords yang semuanya wajib ditemukan pada jawaban siswa.
*/
const questionBanks = {
  utama: [
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Seorang siswa diminta menyusun jadwal belajar mingguan. Ia memisahkan tugas berdasarkan mata pelajaran, lalu memecah setiap tugas menjadi bagian-bagian kecil seperti "membaca materi", "mengerjakan latihan", dan "meninjau ulang". Aspek berpikir komputasional yang paling tepat menggambarkan langkah ini adalah...', options: ['Abstraksi, karena ia menyederhanakan tugas utamanya', 'Dekomposisi, karena ia memecah tugas besar menjadi kecil', 'Pengenalan pola, karena ia mengenali kemiripan tiap tugas', 'Algoritma, karena ia menyusun urutan langkah pengerjaan'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Dalam merancang aplikasi peta digital, pengembang hanya menampilkan jalan utama, nama tempat penting, dan rute, tanpa menampilkan detail seperti jenis pohon di pinggir jalan atau warna cat rumah. Keputusan ini adalah penerapan aspek berpikir komputasional berupa...', options: ['Dekomposisi, karena peta digital dipecah menjadi lapisan-lapisan visual', 'Abstraksi, karena hanya informasi relevan yang tetap ditampilkan di layar', 'Pengenalan pola, karena rute yang memiliki kemiripan dikelompokkan', 'Algoritma, karena rute terpendek dihitung secara berurutan dan logis'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Saat memeriksa hasil ulangan beberapa kelas, seorang guru menyadari bahwa siswa yang sering salah pada soal cerita matematika juga cenderung salah pada soal cerita fisika, sehingga guru menduga akar masalahnya sama, yaitu kemampuan memahami soal cerita. Proses berpikir guru ini paling menggambarkan aspek...', options: ['Dekomposisi', 'Abstraksi', 'Pengenalan pola', 'Algoritma'], answer: 2 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah tim sedang mengembangkan aplikasi absensi sekolah. Mereka membagi pekerjaan menjadi modul login, modul pencatatan kehadiran, dan modul laporan, lalu masing-masing dikerjakan oleh anggota berbeda secara paralel. Manfaat utama penerapan dekomposisi dalam kasus ini adalah...', options: ['Tiap modul bisa dikerjakan terpisah sehingga proses pembuatan lebih efisien', 'Membuat keseluruhan sistem aplikasi dipastikan terbebas dari kesalahan (bug)', 'Menghilangkan kebutuhan pengujian sistem sebelum aplikasi dirilis ke publik', 'Mengurangi secara drastis jumlah anggota tim developer yang dibutuhkan'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Dua kelompok siswa diminta membuat program penghitung nilai rata-rata. Kelompok 1 langsung menulis kode tanpa merancang alur, sedangkan Kelompok 2 terlebih dahulu mengidentifikasi input, proses, dan output yang benar-benar dibutuhkan sebelum menulis kode. Jika keduanya kelak diberi soal yang lebih kompleks, prediksi paling logis mengenai hasil kerja mereka adalah...', options: ['Kelompok 1 lebih efisien karena tidak membuang waktu untuk merancang algoritma', 'Kelompok 2 lebih siap karena penerapan abstraksi dilakukan dengan baik sejak awal', 'Keduanya akan memperoleh hasil yang sama karena kuncinya hanya keahlian koding', 'Kelompok 1 lebih unggul karena praktik langsung terbukti selalu lebih cepat selesai'], answer: 1 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Perhatikan langkah membuat teh berikut: (1) didihkan air, (2) masukkan teh, (3) tuang ke gelas, (4) aduk gula. Jika urutan langkah (2) dan (3) ditukar, hal yang paling mungkin terjadi adalah...', options: ['Tidak berpengaruh apa pun karena urutan bebas', 'Hasil akhir berubah karena teh belum terkena air', 'Proses menyeduh teh menjadi jauh lebih cepat', 'Air di dalam gelas akan menjadi lebih cepat dingin'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah algoritma dikatakan tidak efektif apabila...', options: ['Menghasilkan output yang benar namun membutuhkan waktu eksekusi yang lama', 'Memiliki instruksi yang jelas tetapi tidak pernah berhenti berjalan (infinite loop)', 'Ditulis menggunakan bahasa pemrograman tingkat rendah yang sulit dipelajari', 'Membutuhkan alokasi ruang memori penyimpanan yang sangat besar di sistem'], answer: 1 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Diberikan data belum terurut: 8, 3, 10, 5, 2. Untuk mencari angka 5, algoritma yang bisa langsung digunakan tanpa proses tambahan adalah...', options: ['Binary search, karena datanya masih tergolong sangat pendek', 'Linear search, karena tidak menuntut data dalam keadaan terurut', 'Binary search, karena prosesnya terbukti berkerja lebih cepat', 'Keduanya sama-sama bisa langsung dipakai secara bersamaan'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Data berikut sudah terurut: 2, 5, 8, 12, 16, 20, 23. Jika binary search digunakan untuk mencari angka 12, elemen tengah yang pertama kali diperiksa adalah...', options: ['2', '8', '12', '20'], answer: 2 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Data berikut sudah terurut: 3, 7, 11, 15, 19, 23, 27, 31. Binary search digunakan untuk mencari angka 19. Berapa kali proses pembandingan dengan elemen tengah dilakukan hingga angka tersebut ditemukan?', options: ['1 kali', '2 kali', '3 kali', '4 kali'], answer: 2 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Data: 4, 2, 7, 1. Setelah satu kali proses penukaran elemen berdekatan (langkah pertama bubble sort dari kiri), susunan datanya menjadi...', options: ['2, 4, 7, 1', '4, 2, 7, 1', '4, 7, 2, 1', '2, 7, 4, 1'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Data: 6, 9, 2, 4. Menggunakan selection sort (mencari elemen terkecil lalu menukarnya ke posisi awal), susunan data setelah langkah pertama adalah...', options: ['2, 9, 6, 4', '6, 2, 9, 4', '2, 4, 6, 9', '6, 9, 4, 2'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Data: 5, 1, 4, 2, 8. Menggunakan insertion sort, setelah tiga langkah pertama (elemen ke-2, ke-3, dan ke-4 telah disisipkan pada posisinya masing-masing), susunan data menjadi...', options: ['1, 2, 4, 5, 8', '1, 4, 2, 5, 8', '1, 4, 5, 2, 8', '2, 1, 4, 5, 8'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah sistem informasi akademik menyimpan 10.000 data siswa dalam keadaan tidak terurut berdasarkan NIS, dan pencarian hanya dilakukan sesekali. Algoritma pencarian yang paling masuk akal digunakan tanpa harus mengurutkan data terlebih dahulu adalah...', options: ['Binary search, karena metode ini terbukti selalu berkinerja lebih cepat', 'Linear search, karena menghindari biaya komputasi untuk mengurutkan', 'Binary search, karena mampu menangani data dalam skala puluhan ribu', 'Interpolation search, karena datanya berupa angka dan sangat acak'], answer: 1 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Sebuah aplikasi marketplace memiliki jutaan data produk yang terus diperbarui secara acak setiap detik. Jika aplikasi ini ingin menerapkan binary search agar pencarian lebih cepat, tantangan utama yang harus diatasi terlebih dahulu adalah...', options: ['Membatasi jumlah produk yang ditampilkan agar proses pencarian menjadi lebih ringan', 'Menjaga agar susunan data selalu tetap terurut di tengah pembaruan yang sangat masif', 'Mengonversi seluruh deskripsi nama produk menjadi format bertipe data angka numerik', 'Menyimpan memori pencarian ke dalam struktur data berjenis stack agar bisa lebih cepat'], answer: 1 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Sebuah e-commerce menyediakan fitur "urutkan berdasarkan harga". Ketika pengguna memilih fitur ini, proses yang terjadi di balik layar adalah penerapan dari...', options: ['Algoritma searching, karena sistem secara otomatis mencari produk paling murah', 'Algoritma sorting, karena sistem menyusun ulang data produk sesuai urutan harga', 'Struktur data queue, karena setiap produk akan diproses satu per satu secara antre', 'Struktur data stack, karena produk yang paling baru diinput akan ditampilkan di atas'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah sistem leaderboard game memperbarui peringkat pemain setiap kali ada skor baru masuk, dengan jumlah pemain sangat besar. Jika sistem mengurutkan ulang seluruh data dari awal setiap kali ada satu skor baru masuk, dampak yang paling mungkin terjadi adalah...', options: ['Sistem beroperasi secara optimal karena seluruh data pemain dijamin selalu terurut', 'Sistem menjadi lambat akibat tingginya beban komputasi hanya untuk satu data baru', 'Performa sistem tidak berubah karena proses pengurutan di server selalu berjalan kilat', 'Urutan peringkat menjadi kacau karena skor lama kemungkinan tertimpa skor yang baru'], answer: 1 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Tumpukan piring di dapur, di mana piring yang terakhir diletakkan adalah piring yang pertama kali diambil untuk digunakan, adalah ilustrasi dari struktur data...', options: ['Queue, karena mengikuti urutan datang', 'Stack, karena mengikuti prinsip LIFO', 'Queue, karena mengikuti prinsip LIFO', 'Stack, karena mengikuti prinsip FIFO'], answer: 1 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Antrean kendaraan di pintu tol, di mana kendaraan yang pertama datang adalah yang pertama dilayani, adalah ilustrasi dari struktur data...', options: ['Stack, karena prinsip FIFO', 'Queue, karena prinsip FIFO', 'Stack, karena prinsip LIFO', 'Queue, karena prinsip LIFO'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah sistem memproses permintaan cetak dokumen menggunakan konsep stack, bukan queue. Dampak fatal yang akan dirasakan pengguna jika sistem ini diterapkan pada mesin printer di sebuah kantor adalah...', options: ['Dokumen akan tercetak sesuai urutan pengiriman sehingga terasa adil bagi semua staf', 'Dokumen yang terakhir dikirim justru tercetak lebih dulu, merugikan pengirim pertama', 'Sistem berjalan normal karena stack dan queue pada dasarnya memiliki hasil akhir sama', 'Seluruh antrean akan mengalami error sehingga mesin printer terpaksa di-restart'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Dilakukan urutan operasi berikut pada stack kosong: push(A), push(B), pop(), push(C). Isi stack dari bawah ke atas sekarang adalah...', options: ['A, B, C', 'A, C', 'A, B', 'C, A'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Dilakukan urutan operasi berikut pada stack kosong: push(5), push(9), peek(), push(1). Susunan stack dari bawah ke atas sekarang adalah...', options: ['5, 9, 1', '5, 1, 9', '9, 5, 1', '5, 9'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Sebuah program melakukan urutan operasi berikut pada stack kosong: push(1), push(2), pop(), push(3), push(4), pop(), pop(). Elemen yang tersisa di dalam stack setelah seluruh operasi ini adalah...', options: ['1', '3', '4', 'Kosong (stack habis)'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Dilakukan urutan operasi berikut pada queue kosong: enqueue(A), enqueue(B), dequeue(), enqueue(C). Isi queue dari depan ke belakang sekarang adalah...', options: ['A, B, C', 'B, C', 'A, C', 'C, B'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Dilakukan urutan operasi berikut pada queue kosong: enqueue(7), enqueue(2), enqueue(9). Jika front() dipanggil setelahnya, nilai yang dikembalikan adalah...', options: ['7', '2', '9', 'Kosong'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Sebuah sistem antrean loket melakukan urutan operasi berikut pada queue kosong: enqueue(A), enqueue(B), enqueue(C), dequeue(), enqueue(D), dequeue(). Pelanggan yang berada di posisi paling depan queue setelah seluruh operasi ini adalah...', options: ['A', 'B', 'C', 'D'], answer: 2 },
    { type: 'pg', difficulty: 'mudah', point: 1, question: 'Aplikasi pengolah kata menyimpan setiap perubahan teks yang dilakukan pengguna. Saat pengguna menekan "undo" berkali-kali, perubahan yang dibatalkan selalu perubahan paling baru terlebih dahulu. Struktur data yang paling tepat mendasari fitur ini adalah...', options: ['Queue, karena FIFO', 'Stack, karena LIFO', 'Queue, karena LIFO', 'Stack, karena FIFO'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah compiler bahasa pemrograman menggunakan stack untuk memeriksa kesesuaian tanda kurung buka dan tutup dalam kode, misalnya ( [ { } ] ). Alasan logis mengapa stack sangat cocok digunakan untuk kasus evaluasi ekspresi ini adalah...', options: ['Kurung penutup harus berpasangan dengan kurung buka terakhir, sesuai prinsip LIFO', 'Setiap tanda kurung harus dieksekusi berdasarkan urutan datangnya, sesuai aturan FIFO', 'Memori stack secara dinamis mampu menyimpan baris kode dalam jumlah tak terbatas', 'Pemrosesan logika secara terbalik terbukti memakan daya komputasi yang lebih rendah'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 3, question: 'Sebuah kumpulan data dalam jumlah yang sangat besar akan diurutkan menggunakan algoritma Quick Sort. Jika dalam kasus terburuk (worst case) pemilihan pivot terus-menerus menghasilkan partisi yang sangat tidak seimbang, maka kompleksitas waktu algoritma ini akan merosot tajam menjadi...', options: ['O(\\log n)', 'O(n)', 'O(n \\log n)', 'O(n^2)'], answer: 3 },
    { type: 'pg', difficulty: 'sedang', point: 2, question: 'Sebuah call center menggunakan queue untuk mengatur giliran penelepon yang akan dilayani. Suatu hari konfigurasi sistem diam-diam diubah menjadi berprinsip stack tanpa sepengetahuan manajemen. Keluhan yang paling mungkin disampaikan pelanggan adalah...', options: ['Penelepon yang sudah bersabar menunggu paling lama justru akan dilayani paling akhir', 'Seluruh panggilan dari penelepon akan diangkat dan dijawab secara bersamaan oleh bot', 'Tidak ada perubahan mencolok karena pada dasarnya sistem akan menyeimbangkan beban', 'Penelepon yang baru saja terhubung akan langsung terputus koneksinya secara otomatis'], answer: 0 }
  ],
  remedi: [
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Seorang panitia acara membagi tugas persiapan menjadi tiga bagian: seksi konsumsi, seksi acara, dan seksi perlengkapan. Pemecahan masalah ini merupakan contoh dari konsep...', options: ['Abstraksi, karena panitia menyederhanakan jenis pekerjaannya', 'Dekomposisi, karena tugas besar dipecah menjadi bagian kecil', 'Pengenalan pola, karena setiap seksi memiliki tugas yang mirip', 'Algoritma, karena tugas dikerjakan secara berurutan dari awal'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Saat diminta merangkum sebuah novel tebal, Rina hanya menuliskan tokoh utama, latar tempat, dan alur cerita penting, serta mengabaikan detail percakapan sehari-hari. Langkah Rina mencerminkan...', options: ['Dekomposisi', 'Abstraksi', 'Algoritma', 'Pengenalan pola'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Berdasarkan pengamatannya setiap pagi, Budi menyadari bahwa jika jalan raya utama macet pada jam 7, maka jalan tikus di belakang sekolah juga pasti padat. Budi sedang menerapkan...', options: ['Dekomposisi', 'Abstraksi', 'Pengenalan pola', 'Algoritma'], answer: 2 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Panduan merakit lemari belajar berisi langkah-langkah bernomor urut dari 1 hingga 10 yang tidak boleh dibolak-balik urutannya. Panduan ini adalah contoh nyata dari...', options: ['Algoritma', 'Dekomposisi', 'Abstraksi', 'Pengenalan pola'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Ciri utama dari sebuah algoritma yang baik dan benar dalam ilmu komputer adalah...', options: ['Harus menggunakan bahasa pemrograman tingkat tinggi yang rumit', 'Instruksinya jelas, logis, dan memiliki titik henti (tidak infinite)', 'Mampu memproses semua jenis data tanpa perlu alokasi memori', 'Tidak memerlukan perangkat keras komputer untuk menjalankannya'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Algoritma pencarian yang proses kerjanya selalu membagi dua rentang data secara terus-menerus disebut dengan...', options: ['Linear Search', 'Binary Search', 'Bubble Search', 'Selection Search'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Syarat mutlak yang harus dipenuhi sebelum kita bisa menggunakan algoritma Binary Search pada sekumpulan data adalah...', options: ['Data harus bernilai puluhan atau ratusan saja', 'Data harus sudah berada dalam keadaan terurut', 'Jumlah data tidak boleh lebih dari seratus item', 'Data harus berupa teks, bukan angka numerik'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Terdapat data nilai siswa: 75, 80, 65, 90, 85. Jika guru menggunakan Linear Search untuk mencari nilai 90, pada pencarian keberapa nilai tersebut ditemukan?', options: ['Pencarian pertama', 'Pencarian kedua', 'Pencarian ketiga', 'Pencarian keempat'], answer: 3 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Keunggulan utama dari algoritma Linear Search dibandingkan Binary Search adalah...', options: ['Selalu lebih cepat saat datanya berjumlah jutaan', 'Bisa langsung dipakai pada data yang masih acak', 'Menggunakan kapasitas memori yang lebih besar', 'Otomatis mengurutkan data saat melakukan pencarian'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: "Jika kita mencari nama berawalan 'Z' di buku telepon yang tebal dan sudah terurut abjad, pendekatan Binary Search jauh lebih logis digunakan daripada Linear Search karena...", options: ['Kita bisa langsung melompat memotong ke bagian akhir buku', 'Buku telepon hanya bisa dibaca urut dari halaman pertama', 'Linear Search tidak bisa membaca data yang berupa huruf', 'Binary Search selalu memeriksa data dari elemen paling awal'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Fitur mengurutkan daftar nama kontak di HP dari Z ke A adalah contoh penerapan algoritma pengurutan secara...', options: ['Ascending', 'Descending', 'Randomizing', 'Searching'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Diberikan data: 5, 2, 8, 3. Jika menggunakan Bubble Sort tahap pertama (menukar dua elemen bersebelahan dari kiri), susunan datanya menjadi...', options: ['2, 8, 5, 3', '2, 5, 8, 3', '5, 8, 2, 3', '2, 3, 5, 8'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Algoritma Selection Sort bekerja dengan cara menyeleksi atau mencari elemen tertentu di dalam deretan data. Elemen apakah yang dicarinya pada setiap putaran?', options: ['Elemen yang letaknya persis di posisi paling tengah', 'Elemen bernilai paling kecil (atau paling besar) yang tersisa', 'Elemen yang letaknya bersebelahan untuk langsung ditukar', 'Elemen acak yang dipilih oleh sistem komputer secara bebas'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Algoritma yang bekerja dengan cara mengambil satu elemen data, lalu menyisipkannya pada posisi yang tepat di antara data lain yang sudah terurut sebelumnya, disebut...', options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort'], answer: 2 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Menggunakan Bubble Sort pada ratusan ribu data yang sangat acak tidak disarankan dalam dunia pemrograman karena...', options: ['Sistem komputer akan langsung menolak perintah tersebut', 'Membutuhkan waktu eksekusi lambat akibat pengulangan berlebih', 'Hasil urutannya sering kali terbalik dari yang kita harapkan', 'Algoritma tersebut hanya bisa digunakan pada data bertipe teks'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Tumpukan buku di dalam kardus, di mana buku yang dimasukkan paling akhir akan berada di posisi paling atas dan diambil paling awal, sesuai dengan prinsip...', options: ['Stack (LIFO)', 'Stack (FIFO)', 'Queue (LIFO)', 'Queue (FIFO)'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Antrean pasien di ruang pendaftaran puskesmas beroperasi dengan adil sesuai urutan kedatangan. Sistem ini beroperasi menggunakan prinsip...', options: ['Stack (LIFO)', 'Queue (FIFO)', 'Stack (FIFO)', 'Queue (LIFO)'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Singkatan LIFO pada struktur data Stack memiliki kepanjangan...', options: ['Last In, First Out', 'Late In, Fast Out', 'List In, File Out', 'Line In, Front Out'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Jika antrean pembagian sembako gratis diubah secara paksa menggunakan sistem Stack (LIFO), maka hal yang akan terjadi adalah...', options: ['Pembagian berjalan tertib karena struktur data dikelola komputer', 'Orang yang mengantre sejak subuh justru akan mendapat giliran paling akhir', 'Warga yang baru datang akan otomatis ditolak oleh sistem keamanan panitia', 'Seluruh warga mendapatkan sembako dalam waktu yang bersamaan'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Fitur mengembalikan tindakan yang baru saja dibatalkan (tombol Redo) pada aplikasi Microsoft Word bekerja berdasarkan struktur data...', options: ['Queue', 'Stack', 'Array', 'Tree'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Istilah operasi standar yang digunakan untuk memasukkan atau menumpuk data baru ke dalam sebuah Stack adalah...', options: ['Pop', 'Push', 'Enqueue', 'Dequeue'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Istilah operasi standar yang digunakan untuk mengeluarkan data dari antrean terdepan sebuah Queue adalah...', options: ['Push', 'Pop', 'Enqueue', 'Dequeue'], answer: 3 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Dilakukan operasi Stack: Push(10), Push(20), Pop(), Push(30). Sisa isi Stack dari posisi bawah ke atas saat ini adalah...', options: ['10, 20', '10, 30', '20, 30', '10, 20, 30'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Dilakukan operasi Queue: Enqueue(X), Enqueue(Y), Dequeue(), Enqueue(Z). Sisa isi antrean dari depan ke belakang saat ini adalah...', options: ['X, Y', 'Y, Z', 'X, Z', 'X, Y, Z'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Operasi Peek (mengintip) pada struktur data Stack berfungsi untuk...', options: ['Menghapus semua data yang ada di dalam tumpukan', 'Mengeluarkan elemen terbawah dari dalam tumpukan', 'Melihat elemen teratas tanpa menghapusnya dari tumpukan', 'Menyisipkan data baru di posisi paling tengah tumpukan'], answer: 2 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Kondisi di mana kita mencoba melakukan operasi Pop (mengeluarkan data) pada Stack yang jumlah datanya kosong melompong disebut dengan istilah...', options: ['Overflow', 'Underflow', 'Overload', 'Download'], answer: 1 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Kondisi di mana kita memaksa memasukkan data (Push) ke dalam Stack yang kapasitas memorinya sudah penuh sesak disebut dengan istilah...', options: ['Overflow', 'Underflow', 'Overload', 'Upload'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Sistem operasi komputer memproses antrean lagu yang ditambahkan pengguna ke daftar putar (playlist) Spotify secara berurutan. Aplikasi ini memanfaatkan struktur data...', options: ['Queue', 'Stack', 'Binary', 'Linear'], answer: 0 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Dilakukan operasi Stack berikut secara berurutan: Push(A), Pop(), Push(B), Pop(). Kondisi Stack pada akhir operasi adalah...', options: ['Hanya berisi elemen A', 'Hanya berisi elemen B', 'Berisi elemen A dan B', 'Kosong tidak bersisa'], answer: 3 },
    { type: 'pg', difficulty: 'sedang', point: 1, question: 'Perbedaan utama dan paling mendasar antara Stack dan Queue terletak pada...', options: ['Kapasitas maksimum jumlah data yang bisa disimpan di dalamnya', 'Aturan urutan elemen mana yang boleh dihapus lebih dulu', 'Kecepatan transfer data saat digunakan di dalam memori', 'Jenis bahasa pemrograman yang digunakan untuk membuatnya'], answer: 1 }
  ],
  pengayaan: [
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Sebuah perusahaan logistik menguji tiga algoritma pengurutan paket. Waktu Algoritma A berubah dari 0,1 detik untuk 10 paket menjadi 10 detik untuk 100 paket dan 1.000 detik untuk 1.000 paket. Dalam notasi Big-O, kompleksitas Algoritma A adalah...', options: ['$O(1)$', '$O(\\log n)$', '$O(n)$', '$O(n^2)$'], answer: 3 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Jika perusahaan harus memproses 1 juta resi paket setiap hari, algoritma manakah yang paling berbahaya diterapkan pada server?', options: ['Algoritma A, karena waktu proses kuadratik dapat menyebabkan timeout dan server lumpuh', 'Algoritma B, karena pertumbuhannya konstan dapat memicu prosesor panas jika tidak dibatasi', 'Algoritma C, karena server tidak mampu mendeteksi proses logaritmik yang sangat cepat', 'Ketiganya, karena semua algoritma tidak mungkin dipakai tanpa superkomputer'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Database Dukcapil memiliki 270 juta NIK yang sudah terurut. Dengan Binary Search berkompleksitas $O(\\log n)$, perkiraan maksimal langkah pembandingan untuk menemukan satu NIK adalah...', options: ['270.000.000 langkah', '135.000.000 langkah', 'Kurang dari 30 langkah', 'Hanya butuh 1 langkah'], answer: 2 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Mengapa Bubble Sort sangat dihindari untuk fitur urutkan harga pada e-commerce dengan jutaan data?', options: ['Bubble Sort hanya mengurutkan angka dari harga tertinggi ke harga terendah', 'Kompleksitas $O(n^2)$ membuat jutaan data membutuhkan waktu sangat lama', 'Bubble Sort hanya bekerja jika data sudah hampir seluruhnya terurut', 'Bubble Sort memakai Stack, sedangkan keranjang belanja memakai Queue'], answer: 1 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Lima mobil V, W, X, Y, Z masuk berurutan ke gang buntu. Mobil V berada paling dalam dan Z berada paling luar. Struktur data dan mobil yang keluar pertama adalah...', options: ['Queue, lalu mobil V keluar pertama', 'Queue, lalu mobil Z keluar pertama', 'Stack, lalu mobil V keluar pertama', 'Stack, lalu mobil Z keluar pertama'], answer: 3 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Di UGD, pasien serangan jantung yang baru datang ditangani lebih dahulu daripada pasien demam ringan yang sudah menunggu. Konsep struktur data yang sesuai adalah...', options: ['Stack LIFO Override', 'Priority Queue', 'Randomized Sorting', 'Binary Search Tree'], answer: 1 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Karakteristik utama kurva kompleksitas logaritmik $O(\\log n)$ jika digambarkan pada diagram adalah...', options: ['Garis diagonal yang naik stabil dengan kemiringan tetap sepanjang sumbu data', 'Garis yang awalnya naik lalu semakin mendatar ketika jumlah data bertambah', 'Garis yang awalnya datar kemudian meroket seperti setengah huruf U', 'Garis acak yang naik turun mengikuti koneksi internet pengguna'], answer: 1 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Budi membaca buku, membuka kamus untuk istilah asing, lalu membuka ensiklopedia dan menutupnya sebelum kembali ke kamus. Pola ini identik dengan sistem kerja...', options: ['Antrean (Queue)', 'Pencarian Linear (Linear Search)', 'Memori Bertumpuk (Stack)', 'Pengurutan Seleksi (Selection Sort)'], answer: 2 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Daftar lagu sudah diurutkan berdasarkan abjad, lalu diurutkan berdasarkan tahun rilis. Jika algoritmanya Stable Sort, lagu pada tahun yang sama akan...', options: ['Diacak karena parameter tahun menimpa urutan abjad sebelumnya', 'Tetap mempertahankan urutan abjad dalam kelompok tahun yang sama', 'Dibalik menjadi Z-A karena indeks diurutkan dari belakang', 'Menimbulkan error karena dua lagu memiliki nilai tahun yang sama'], answer: 1 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Quick Sort dapat berubah dari $O(n \\log n)$ menjadi $O(n^2)$ pada kondisi worst case apabila...', options: ['Data sudah terurut dan pivot selalu dipilih dari posisi paling ujung', 'Data memiliki digit besar dan sebagian besar angkanya bernilai ganjil', 'Server kehilangan koneksi saat proses pertukaran blok memori berlangsung', 'Pengguna memberi perintah baru sebelum proses sorting sebelumnya selesai'], answer: 0 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Saat merancang lampu lalu lintas pintar, masalah dipecah menjadi modul kamera, timer dinamis, dan sinkronisasi nirkabel. Aspek berpikir komputasional yang dominan adalah...', options: ['Formulasi Algoritma Tingkat Lanjut', 'Abstraksi Pola Ekstrem', 'Dekomposisi Fungsional', 'Pengenalan Pola Geometris'], answer: 2 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Aktivitas dunia nyata yang paling mewakili kompleksitas waktu konstan $O(1)$ adalah...', options: ['Mencari novel tertentu di perpustakaan tanpa sistem katalog', 'Mengurutkan setumpuk kartu dari angka terkecil ke terbesar', 'Menjumlahkan ribuan struk untuk memperoleh pendapatan bulanan', 'Mengambil piring yang berada paling atas dari tumpukan'], answer: 3 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Buffer pada pemutar video online menyimpan potongan video yang masuk sementara dan memutarnya secara berurutan. Prinsip struktur data yang digunakan adalah...', options: ['LIFO, karena frame terakhir harus diputar lebih dahulu', 'FIFO, karena frame pertama yang selesai diunduh diputar lebih dahulu', 'Sorting, karena warna piksel harus diurutkan setiap detik', 'Searching, karena sistem mencari blok memori yang paling aman'], answer: 1 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Kamu mencari buah paling kecil dari beberapa keranjang, memindahkannya ke posisi pertama, lalu mengulanginya untuk buah berikutnya. Algoritma yang digunakan adalah...', options: ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Binary Sort'], answer: 2 },
    { type: 'pg', difficulty: 'sulit', point: 1, question: 'Jika Linear Search diganti algoritma berkompleksitas $O(n!)$ untuk mencari satu plat dari 100 daftar tersangka, dampak komputasinya adalah...', options: ['Data ditemukan sangat cepat jika berada pada indeks ganjil', 'Server menjadi berlipat ganda lebih cepat karena alokasi silang', 'Server praktis tidak selesai karena $100!$ membutuhkan waktu yang sangat besar', 'Basis data rusak permanen karena beban kerja selalu menyebabkan Stack Overflow'], answer: 2 }
  ]
};

const utamaDistractors = [
  'Evaluasi, karena memantau hasil akhirnya.',
  'Representasi, karena mengubah bentuk data.',
  'Penarikan kesimpulan secara metode deduktif.',
  'Mempercepat pembaruan sistem secara otomatis.',
  'Kelompok dua akan merasa kebingungan.',
  'Warna teh menjadi lebih pekat.',
  'Dijalankan pada sistem operasi berbeda.',
  'Interpolation search, karena sangat akurat.',
  '23',
  '5 kali',
  '1, 2, 4, 7.',
  '9, 6, 4, 2.',
  '8, 5, 4, 2, 1.',
  'Tree search, agar datanya seimbang.',
  'Mengganti bahasa pemrograman pada aplikasinya.',
  'Algoritma enkripsi untuk melindungi datanya.',
  'Kapasitas hardisk server cepat penuh.',
  'Array dinamis, karena ukurannya fleksibel.',
  'Linked list, karena saling terhubung.',
  'Tinta mesin printer cepat habis.',
  'Kosong',
  '1, 9, 5.',
  'Hanya tersisa data angka 2.',
  'Kosong',
  'Muncul notifikasi error pada sistem.',
  'Tidak ada pelanggan yang tersisa.',
  'Tree, karena memiliki cabang riwayat.',
  'Mampu mempercepat kinerja sistem operasi.',
  'O(n!)',
  'Tagihan pulsa telepon menjadi mahal.'
];
questionBanks.utama.forEach((question, index) => question.options.push(utamaDistractors[index]));

const remediDistractors = [
  'Evaluasi, karena memantau hasil akhir.',
  'Representasi',
  'Evaluasi',
  'Pengenalan pola langkah yang berulang.',
  'Harus menggunakan instruksi bahasa mesin.',
  'Algoritma Interpolation Search.',
  'Jumlah data harus bernilai genap.',
  'Ditemukan pada pencarian kelima.',
  'Selalu lebih cepat dan akurat.',
  'Karena mencari teks lebih sulit.',
  'Pengacakan urutan (Randomizing).',
  '8, 5, 3, 2.',
  'Elemen yang bernilai paling tengah.',
  'Algoritma Merge Sort.',
  'Hanya berfungsi untuk data teks.',
  'Struktur Graph (Jaringan).',
  'Struktur Tree (Pohon).',
  'Load In, First Out.',
  'Pembagian sembako menjadi lebih adil.',
  'Struktur Linked List.',
  'Operasi Peek.',
  'Operasi Front.',
  'Kosong karena dihapus oleh sistem.',
  'Antrean dihapus secara otomatis.',
  'Menghitung jumlah elemen yang tersisa.',
  'Terjadi malfungsi pada sistem komputer.',
  'Mengalami kondisi System Crash.',
  'Menggunakan Graph dinamis.',
  'Menyisakan elemen A dan B.',
  'Kapasitas data yang bisa ditampung.'
];
questionBanks.remedi.forEach((question, index) => question.options.push(remediDistractors[index]));

const pengayaanDistractors = [
  'O(n \\log n)',
  'Semua algoritma akan langsung gagal.',
  'Sekitar sepuluh ribu langkah pembandingan.',
  'Karena memakan kuota internet pelanggan.',
  'Terjadi Queue; semua keluar bersamaan.',
  'Sistem antrean Stack darurat sementara.',
  'Garis lurus horizontal mendatar sempurna.',
  'Sistem algoritma Bubble Sort.',
  'Dihapus karena dianggap data ganda.',
  'Server kehabisan kapasitas memori RAM.',
  'Evaluasi sistem berbasis logika algoritma.',
  'Membaca ribuan halaman buku telepon.',
  'Menggunakan Stack karena lebih aman.',
  'Teknik algoritma pengurutan Merge Sort.',
  'Kapasitas memori server menjadi penuh.'
];
questionBanks.pengayaan.forEach((question, index) => question.options.push(pengayaanDistractors[index]));

const app = document.getElementById('app');
const state = {
  screen: 'login', student: { name: '', className: '' }, mode: null, questions: [], answers: [], doubts: [], current: 0,
  endAt: 0, timerId: null, score: 0, mainScore: null, remedialScore: null, enrichmentScore: null,
  remedialAttempts: 0, remedialCurrentAttempt: 0, enrichmentTaken: false, finished: false
};

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
const esc = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const modeLabel = { utama: 'Soal Utama', remedi: 'Soal Remedi', pengayaan: 'Soal Pengayaan' };
const modeTime = { utama: 60, remedi: 30, pengayaan: 30 };
const defaultPoints = { pg: 1, pgk: 2, essay: 3 };

function header(session = false, hideTeacher = false) {
  return `<header class="topbar"><div class="brand"><img class="brand-mark" src="image.png" alt="Logo Sumatif Kelas 10"><div>SUMATIF X<small>Informatika • Kelas 10</small><small class="copyright">© Muhammad Husein Arafat 2026</small></div></div><div class="topbar-actions">${session ? `<div class="session-chip"><span class="session-dot"></span>${esc(state.student.name)}</div>` : hideTeacher ? '' : '<button class="teacher-entry" id="teacherLogin">Login Guru</button>'}<button class="close-page" id="closePage" type="button">Close</button></div></header>`;
}

function closeSession(confirmClose = false) {
  if (confirmClose && !confirm('Tutup sesi ini? Jawaban yang belum dikumpulkan akan hilang.')) return;
  clearInterval(state.timerId);
  state.screen = 'login'; state.student = { name: '', className: '' }; state.mode = null; state.questions = []; state.answers = []; state.doubts = []; state.current = 0;
  state.score = 0; state.mainScore = null; state.remedialScore = null; state.enrichmentScore = null; state.remedialAttempts = 0; state.remedialCurrentAttempt = 0; state.enrichmentTaken = false; state.finished = false;
  render();
}

function bindCloseButton(confirmClose = false, closeWindow = false) {
  document.getElementById('closePage')?.addEventListener('click', () => {
    if (closeWindow) { window.close(); return; }
    closeSession(confirmClose);
  });
}

function renderLogin() {
  app.innerHTML = `${header()}<main class="page login-page"><section class="login-layout"><div class="login-intro"><div class="eyebrow">Ulangan Sumatif • 2026</div><h1>Berpikir komputasional, dimulai dari sini.</h1><p>Mulailah dengan bacaan doa agar ujianmu berkah. Siapkan fokus terbaikmu, baca setiap soal dengan teliti, lalu kerjakan dengan tenang sampai selesai.</p><div class="exam-facts"><div><strong>${questionBanks.utama.length}</strong><span>Contoh soal utama</span></div><div><strong>60′</strong><span>Durasi</span></div><div><strong>82</strong><span>KKM</span></div></div></div><form class="login-form" id="loginForm"><h2>Selamat datang</h2><p>Isi identitas untuk masuk ke ruang ujian.</p><label class="field">Nama lengkap<input name="name" required autocomplete="name" placeholder="Contoh: Aulia Putri" /></label><label class="field">Kelas<input name="className" required placeholder="Contoh: X-1" /></label><div class="error" id="loginError"></div><button class="primary-btn full" type="submit">Masuk ke ruang ujian&nbsp; →</button></form></section></main>`;
  bindCloseButton(false, true);
  document.getElementById('teacherLogin').addEventListener('click', () => { state.screen = 'teacherLogin'; render(); });
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.student.name = data.get('name').trim(); state.student.className = data.get('className').trim();
    if (!state.student.name || !state.student.className) return;
    state.screen = 'dashboard'; render();
  });
}

function renderTeacherLogin() {
  app.innerHTML = `${header(false, true)}<main class="page login-page"><section class="panel teacher-login-panel"><div class="eyebrow">Akses pengajar</div><h1>Menu Guru</h1><p>Masuk untuk melihat bank soal yang tersimpan di dalam aplikasi.</p><form id="teacherLoginForm"><label class="field">Password guru<input name="password" type="password" required placeholder="Masukkan password" /></label><div class="error" id="teacherError"></div><button class="primary-btn full" type="submit">Masuk ke menu guru</button><button class="ghost-btn full back-login" type="button" id="backToStudent">Kembali ke login siswa</button></form></section></main>`;
  bindCloseButton();
  document.getElementById('backToStudent').addEventListener('click', () => { state.screen = 'login'; render(); });
  document.getElementById('teacherLoginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (new FormData(event.currentTarget).get('password') !== 'moseraf04') { document.getElementById('teacherError').textContent = 'Password guru salah.'; return; }
    state.screen = 'teacher'; render();
  });
}

function renderTeacher() {
  const bank = state.teacherBank || 'utama';
  const bankQuestions = questionBanks[bank];
  const cards = bankQuestions.map((question, index) => `<article class="teacher-question"><div class="teacher-question-head"><strong>Soal ${index + 1}</strong><span>${question.difficulty ? `${question.difficulty} • ` : ''}${question.point ?? defaultPoints[question.type] ?? 0} poin</span></div><p>${esc(question.question)}</p><ol class="teacher-options">${(question.options || []).map((option, optionIndex) => `<li class="${optionIndex === question.answer ? 'correct-option' : ''}">${esc(option)}${optionIndex === question.answer ? ' <b>(kunci)</b>' : ''}</li>`).join('')}</ol></article>`).join('');
  app.innerHTML = `${header(false, true)}<main class="page teacher-page"><div class="dashboard-head"><div><div class="welcome-label">Mode guru</div><h1>Bank soal</h1><p>Soal yang tampil berasal langsung dari array <code>questionBanks</code> di app.js.</p></div><button class="ghost-btn" id="teacherLogout">Keluar</button></div><nav class="teacher-tabs"><button class="${bank === 'utama' ? 'active' : ''}" data-bank="utama">Utama (${questionBanks.utama.length})</button><button class="${bank === 'remedi' ? 'active' : ''}" data-bank="remedi">Remedi (${questionBanks.remedi.length})</button><button class="${bank === 'pengayaan' ? 'active' : ''}" data-bank="pengayaan">Pengayaan (${questionBanks.pengayaan.length})</button></nav><div class="teacher-bank-head"><h2>${modeLabel[bank]}</h2><span>${bankQuestions.length} soal</span></div><section class="teacher-question-list">${cards}</section></main>`;
  bindCloseButton();
  document.getElementById('teacherLogout').addEventListener('click', () => { state.screen = 'login'; render(); });
  document.querySelectorAll('[data-bank]').forEach((button) => button.addEventListener('click', () => { state.teacherBank = button.dataset.bank; render(); }));
}

function renderDashboard() {
  app.innerHTML = `${header(true)}<main class="page"><div class="dashboard-head"><div><div class="welcome-label">Halo, ${esc(state.student.name)} 👋</div><h1>Siap untuk tantangan hari ini?</h1><p>Kelas ${esc(state.student.className)} · Ulangan Sumatif Informatika</p></div></div><div class="dashboard-grid"><section class="panel main-exam"><span class="badge">Wajib dikerjakan</span><h2>Ujian Utama</h2><p>Uji pemahamanmu tentang konsep dasar Informatika, algoritma, jaringan, dan keamanan digital.</p><div class="exam-summary"><div><strong>${questionBanks.utama.length}</strong><span>Contoh soal</span></div><div><strong>60 menit</strong><span>Waktu tersedia</span></div><div><strong>82</strong><span>Nilai KKM</span></div></div><button class="primary-btn" id="startMain">Mulai kerjakan soal&nbsp; →</button></section><aside class="panel rules"><h3>Petunjuk singkat</h3><div class="rule"><b>01</b><span>Pilih jawaban paling tepat. Soal kompleks dapat memiliki lebih dari satu jawaban.</span></div><div class="rule"><b>02</b><span>Kamu bebas berpindah nomor melalui panel navigasi di sebelah kiri.</span></div><div class="rule"><b>03</b><span>Gunakan tanda <strong>Ragu-ragu</strong> agar soal mudah ditemukan kembali.</span></div><div class="rule"><b>04</b><span>Nilai akan muncul otomatis setelah kamu mengumpulkan jawaban.</span></div></aside></div></main>`;
  bindCloseButton();
  document.getElementById('startMain').addEventListener('click', () => startExam('utama'));
}

function startExam(mode) {
  if (mode === 'remedi') state.remedialCurrentAttempt += 1;
  state.mode = mode; state.questions = shuffle(questionBanks[mode]);
  state.answers = Array(state.questions.length).fill(null); state.doubts = Array(state.questions.length).fill(false); state.current = 0;
  state.endAt = Date.now() + modeTime[mode] * 60 * 1000; state.screen = 'exam'; render();
}

function formatTime() { const remaining = Math.max(0, state.endAt - Date.now()); const seconds = Math.floor(remaining / 1000); return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; }
function isAnswered(answer) { return Array.isArray(answer) ? answer.length > 0 : answer !== null && answer !== ''; }
function answerClass(index) { return state.doubts[index] ? 'doubt' : isAnswered(state.answers[index]) ? 'done' : ''; }

function renderExam() {
  const question = state.questions[state.current]; const answer = state.answers[state.current];
  const typeLabel = question.type === 'pg' ? 'Pilihan Ganda' : question.type === 'pgk' ? 'Pilihan Ganda Kompleks' : 'Essay / Isian';
  const difficultyLabel = question.difficulty ? `${question.difficulty[0].toUpperCase()}${question.difficulty.slice(1)} • ${question.point ?? defaultPoints[question.type]} poin` : '';
  const nav = state.questions.map((_, index) => `<button class="question-number ${index === state.current ? 'active' : ''} ${answerClass(index)}" data-index="${index}">${index + 1}</button>`).join('');
  const questionBody = question.type === 'essay' ? `<textarea class="essay-answer" id="essayAnswer" placeholder="Ketik jawabanmu di sini...">${esc(answer || '')}</textarea><div class="hint">Jawaban dinilai otomatis berdasarkan kata kunci yang ditentukan guru.</div>` : `<div class="options">${question.options.map((option, index) => { const selected = question.type === 'pgk' ? (answer || []).includes(index) : answer === index; return `<label class="option ${selected ? 'selected' : ''}"><input type="${question.type === 'pgk' ? 'checkbox' : 'radio'}" name="answer" value="${index}" ${selected ? 'checked' : ''}><span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-text">${esc(option)}</span></label>`; }).join('')}</div>`;
  app.innerHTML = `<div class="exam-layout"><aside class="exam-sidebar"><div class="brand"><img class="brand-mark" src="image.png" alt="Logo Sumatif Kelas 10"><div>SUMATIF X<small>Ruang Ujian</small><small class="copyright">© Muhammad Husein Arafat 2026</small></div></div><h2 class="exam-title">${modeLabel[state.mode]}</h2><p class="exam-subtitle">${esc(state.student.name)} · ${esc(state.student.className)}</p><div class="timer-box"><span>Sisa waktu</span><div class="timer" id="timer">${formatTime()}</div></div><div class="question-nav-label"><span>Navigasi soal</span><span>${state.questions.length} soal</span></div><div class="question-grid">${nav}</div><div class="legend"><div class="legend-row"><i class="legend-dot"></i>Belum dikerjakan</div><div class="legend-row"><i class="legend-dot green"></i>Sudah dikerjakan</div><div class="legend-row"><i class="legend-dot yellow"></i>Ragu-ragu</div></div></aside><section class="exam-content"><div class="exam-topbar"><div class="student">Peserta: <strong>${esc(state.student.name)}</strong></div><div class="exam-top-actions"><button class="ghost-btn" id="submitExam">Kumpulkan</button><button class="close-page exam-close" id="closePage" type="button">Close</button></div></div><main class="question-area"><div class="question-meta"><span class="badge">${typeLabel}${difficultyLabel ? ` • ${difficultyLabel}` : ''}</span><span class="question-count">Soal ${state.current + 1} dari ${state.questions.length}</span></div><h1 class="question-text">${esc(question.question)}</h1>${questionBody}<div class="question-actions"><button class="ghost-btn ${state.doubts[state.current] ? 'doubt-btn active' : ''}" id="toggleDoubt">${state.doubts[state.current] ? '★ Ditandai ragu' : '☆ Tandai ragu-ragu'}</button><div class="action-right"><button class="ghost-btn" id="prevQuestion" ${state.current === 0 ? 'disabled' : ''}>← Sebelumnya</button><button class="primary-btn" id="nextQuestion">${state.current === state.questions.length - 1 ? 'Selesai' : 'Berikutnya →'}</button></div></div></main></section></div>`;
  bindCloseButton(true);
  bindExamEvents(); startTimer();
}

function saveCurrentAnswer() {
  const question = state.questions[state.current];
  if (question.type === 'essay') state.answers[state.current] = document.getElementById('essayAnswer').value.trim();
  else if (question.type === 'pgk') state.answers[state.current] = [...document.querySelectorAll('input[name="answer"]:checked')].map((input) => Number(input.value));
  else { const checked = document.querySelector('input[name="answer"]:checked'); state.answers[state.current] = checked ? Number(checked.value) : null; }
}
function bindExamEvents() {
  document.querySelectorAll('.question-number').forEach((button) => button.addEventListener('click', () => { saveCurrentAnswer(); state.current = Number(button.dataset.index); renderExam(); }));
  document.querySelectorAll('input[name="answer"]').forEach((input) => input.addEventListener('change', saveCurrentAnswer));
  document.getElementById('essayAnswer')?.addEventListener('input', saveCurrentAnswer);
  document.getElementById('toggleDoubt').addEventListener('click', () => { state.doubts[state.current] = !state.doubts[state.current]; renderExam(); });
  document.getElementById('prevQuestion').addEventListener('click', () => { if (state.current > 0) { saveCurrentAnswer(); state.current -= 1; renderExam(); } });
  document.getElementById('nextQuestion').addEventListener('click', () => { saveCurrentAnswer(); if (state.current === state.questions.length - 1) submitExam(); else { state.current += 1; renderExam(); } });
  document.getElementById('submitExam').addEventListener('click', () => { saveCurrentAnswer(); if (confirm('Kumpulkan jawaban sekarang?')) submitExam(); });
}
function startTimer() { clearInterval(state.timerId); state.timerId = setInterval(() => { const timer = document.getElementById('timer'); if (!timer) return clearInterval(state.timerId); timer.textContent = formatTime(); if (Date.now() >= state.endAt) { clearInterval(state.timerId); saveCurrentAnswer(); submitExam(true); } }, 1000); }

function isQuestionCorrect(question, answer) {
  if (question.type === 'essay') {
    const text = String(answer || '').toLowerCase();
    return (question.keywords || []).every((keyword) => text.includes(keyword.toLowerCase()));
  }
  if (question.type === 'pg') return answer === question.answer;
  return [...(answer || [])].sort().join(',') === [...question.answer].sort().join(',');
}

function formatAnswer(question, answer) {
  if (question.type === 'essay') return answer ? esc(answer) : 'Belum dijawab';
  if (question.type === 'pgk') {
    return answer?.length ? answer.map((index) => `${String.fromCharCode(65 + index)}. ${esc(question.options[index])}`).join('<br>') : 'Belum dijawab';
  }
  return answer === null || answer === undefined ? 'Belum dijawab' : `${String.fromCharCode(65 + answer)}. ${esc(question.options[answer])}`;
}

function renderAnswerReview() {
  return `<section class="answer-review"><div class="review-head"><h2>Pembahasan soal</h2><p>Periksa jawaban yang benar dan bagian yang masih perlu dipelajari.</p></div><div class="review-list">${state.questions.map((question, index) => { const answer = state.answers[index]; const correct = isQuestionCorrect(question, answer); const correctAnswer = question.type === 'essay' ? (question.keywords || []).join(', ') : question.type === 'pgk' ? question.answer.map((optionIndex) => `${String.fromCharCode(65 + optionIndex)}. ${esc(question.options[optionIndex])}`).join('<br>') : `${String.fromCharCode(65 + question.answer)}. ${esc(question.options[question.answer])}`; return `<article class="review-item ${correct ? 'review-correct' : 'review-wrong'}"><div class="review-title"><strong>Soal ${index + 1}</strong><span>${correct ? 'Benar' : 'Perlu diperbaiki'}</span></div><p class="review-question">${esc(question.question)}</p><div class="review-answer"><div><b>Jawabanmu</b><span>${formatAnswer(question, answer)}</span></div><div><b>Kunci jawaban</b><span>${correctAnswer}</span></div></div><p class="review-explanation"><b>Pembahasan:</b> ${correct ? 'Jawabanmu sudah tepat.' : `Jawaban yang benar adalah ${correctAnswer}. Pelajari kembali konsep pada soal ini.`}</p></article>`; }).join('')}</div></section>`;
}

function scoreExam() {
  let earned = 0; let possible = 0;
  state.questions.forEach((question, index) => { const point = Number(question.point ?? defaultPoints[question.type] ?? 1); possible += point; if (isQuestionCorrect(question, state.answers[index])) earned += point; });
  return possible ? Math.round((earned / possible) * 100) : 0;
}
function submitExam(auto = false) { clearInterval(state.timerId); state.score = scoreExam(); if (state.mode === 'utama') state.mainScore = state.score; if (state.mode === 'remedi') state.remedialScore = state.score; if (state.mode === 'pengayaan') state.enrichmentScore = state.score; state.screen = 'result'; state.autoSubmitted = auto; render(); }

function renderResult() {
  const score = state.score; const passed = score >= 82; const isMain = state.mode === 'utama';
  let content = '';
  if (isMain && !passed) content = `<h3>Waktunya menguatkan lagi</h3><p>Nilai ulangan asli kamu masih di bawah KKM 82. Gunakan kesempatan remedi untuk mencoba kembali.</p><div class="score-comparison"><div class="score-item"><strong>${state.mainScore}</strong><span>Nilai ulangan asli</span></div><div class="score-item"><strong>-</strong><span>Nilai remedi</span></div></div><div class="result-actions">${state.remedialAttempts < 3 ? `<button class="primary-btn" id="nextPath">Mulai remedi (${state.remedialAttempts + 1}/3)&nbsp; →</button>` : '<button class="primary-btn" id="finish">Lihat ringkasan akhir</button>'}</div>`;
  else if (isMain && passed) content = `<h3>Selamat, kamu lulus!</h3><p>Nilai utama kamu sudah melewati KKM. Pengayaan tersedia sebagai tantangan tambahan dan bisa memberi bonus nilai.</p><div class="result-actions"><button class="primary-btn" id="nextPath">Ambil pengayaan&nbsp; →</button><button class="ghost-btn" id="finish">Lewati</button></div>`;
  else if (state.mode === 'remedi') content = `<h3>${passed ? 'Remedi berhasil!' : 'Tetap semangat belajar'}</h3><p>${passed ? 'Nilai remedi sudah mencapai KKM dan langsung menjadi nilai akhir yang digunakan.' : 'Nilai remedi masih di bawah KKM. Periksa kembali materi dan gunakan kesempatan yang tersedia.'}</p><div class="score-comparison"><div class="score-item"><strong>${state.mainScore}</strong><span>Nilai ulangan asli</span></div><div class="score-item"><strong>${state.remedialScore}</strong><span>Nilai remedi</span></div><div class="score-item"><strong>${passed ? state.remedialScore : state.mainScore}</strong><span>Nilai akhir sementara</span></div></div><div class="result-actions">${!passed && state.remedialAttempts < 3 ? `<button class="primary-btn" id="nextPath">Coba lagi (${state.remedialAttempts + 1}/3)&nbsp; →</button>` : '<button class="primary-btn" id="finish">Lanjut ke ringkasan&nbsp; →</button>'}</div>`;
  else content = `<h3>${score > 90 ? 'Bonus berhasil didapat!' : 'Pengayaan selesai'}</h3><p>${score > 90 ? 'Nilai pengayaan kamu di atas 90. Satu poin bonus akan ditambahkan ke nilai sumatif utama.' : 'Terima kasih sudah menantang dirimu. Nilai pengayaan tercatat sebagai hasil tambahan.'}</p><div class="result-actions"><button class="primary-btn" id="finish">Lihat ringkasan akhir&nbsp; →</button></div>`;
  const showReview = state.mode !== 'remedi' || state.remedialCurrentAttempt >= 3;
  app.innerHTML = `${header(true)}<main class="result-wrap"><section class="result-hero"><div class="result-icon">${passed ? '✓' : '!'}</div><h1>${modeLabel[state.mode]} selesai</h1><p>${state.autoSubmitted ? 'Waktu habis, jawaban telah dikumpulkan otomatis.' : 'Jawabanmu telah berhasil dikumpulkan.'}</p><div class="score">${score}<small> / 100</small></div></section>${showReview ? renderAnswerReview() : ''}<section class="result-card">${content}</section></main>`;
  bindCloseButton();
  document.getElementById('nextPath')?.addEventListener('click', () => { if (state.mode === 'utama') { if (state.score < 82) state.remedialAttempts = 1; else state.enrichmentTaken = true; startExam(state.score < 82 ? 'remedi' : 'pengayaan'); } else if (state.mode === 'remedi') { state.remedialAttempts += 1; startExam('remedi'); } });
  document.getElementById('finish')?.addEventListener('click', () => { state.finished = true; state.screen = 'closing'; render(); });
}

function renderClosing() {
  const bonus = state.enrichmentTaken && state.enrichmentScore > 90 ? 1 : 0; const baseScore = state.remedialScore >= 82 ? state.remedialScore : (state.mainScore || 0); const finalScore = Math.min(100, baseScore + bonus);
  app.innerHTML = `${header(true)}<main class="result-wrap"><section class="close-note"><div class="result-icon">✓</div><h2>Perjalanan ujian selesai</h2><p>Berikut perbandingan nilai dan nilai akhir kamu.</p><div class="score" style="color: var(--green-700); margin: 24px 0 10px;">${finalScore}<small style="color:var(--muted);"> / 100</small></div><div class="score-comparison"><div class="score-item"><strong>${state.mainScore ?? '-'}</strong><span>Nilai ulangan asli</span></div><div class="score-item"><strong>${state.remedialScore ?? '-'}</strong><span>Nilai remedi</span></div><div class="score-item"><strong>${state.enrichmentScore ?? '-'}</strong><span>Nilai pengayaan</span></div></div><p>${bonus ? 'Bonus pengayaan: +1 poin.' : 'Tidak ada bonus pengayaan.'}</p><div class="result-card"><strong>Jangan lupa catat nilai kalian masing-masing!</strong></div><button class="primary-btn" id="closeApp">Close</button></section></main>`;
  bindCloseButton();
  document.getElementById('closeApp').addEventListener('click', () => closeSession());
}
function render() { if (state.screen === 'login') renderLogin(); else if (state.screen === 'teacherLogin') renderTeacherLogin(); else if (state.screen === 'teacher') renderTeacher(); else if (state.screen === 'dashboard') renderDashboard(); else if (state.screen === 'exam') renderExam(); else if (state.screen === 'result') renderResult(); else renderClosing(); }
render();
