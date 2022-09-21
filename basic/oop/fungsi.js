function mobil(p1,p2,p3) {
    this.type = p1;
    this.tanggal = p2;
    this.tahun = p3;
    this.history_service =[];

    this.service = function (tanggal) {
        this.history_service.push(tanggal);
    }
}

let ferrari = new mobil("EV", "merah", "2022");
ferrari.type = "EV";
ferrari.service("21-09-2022");
ferrari.service("01-08-2022");

console.log(ferrari.history_service);
