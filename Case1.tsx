type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
  }
  
  const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
  }
  ]
  
  //Array untuk menyimpan objek unique berdasarkan fruitName
  var uniqueFruits:IFruit[] = [];
  
  //Menampilkan semua fruitName yang unik
  const soal1 = () => {
    fruits.forEach(element => {
      var fruitNames:String[] = [];
      if(fruitNames.includes(element.fruitName.toLowerCase())){
        return;
      }
      else{
        console.log(element.fruitName);
        fruitNames.push(element.fruitName.toLowerCase());
        uniqueFruits.push(element);
      }
    });
  }
  
  soal1();
  console.log("===== Soal 2 =====");
  
  //Memisahkan objek-objek di dalam array objek unik berdasarkan
  //fruitType ke dalam dua array objek
  var localFruits:IFruit[] = [];
  var importFruits:IFruit[] = [];
  
  const soal2 = () => {
    uniqueFruits.forEach(element => {
      if(element.fruitType.toString() === 'LOCAL'){
        localFruits.push(element);
      }
      else if(element.fruitType.toString() === 'IMPORT'){
        importFruits.push(element);
      }
    })
  
    var localResult:String = "Buah Buah Lokal: ";
    localFruits.forEach(item => {
      localResult = localResult.concat(item.fruitName + " ");
    })
  
    var importResult:String = "Buah Buah Import: ";
    importFruits.forEach(item => {
      importResult = importResult.concat(item.fruitName + " ");
    })
  
    console.log(localResult);
    console.log(importResult);
  }
  
  soal2();
  console.log("===== Soal 3 =====")
  
  //Menghitung jumlah stok dari setiap pengelompokan objek
  const soal3 = () => {
    var localStock:String = "Stok Buah Lokal: \n";
    var totalLocal:number = 0;
    localFruits.forEach(element => {
      localStock = localStock.concat(element.fruitName.toString() + " " + element.stock.toString() + "\n");
      totalLocal += element.stock;
    })
    console.log(localStock);
    console.log(totalLocal);
  
    var importStock:String = "Stok Buah Import: \n";
    var totalImport:number = 0;
    importFruits.forEach(element => {
      importStock = importStock.concat(element.fruitName.toString() + " " + element.stock.toString() + "\n");
      totalImport += element.stock;
    })
    console.log(importStock);
    console.log(totalImport);
  }
  soal3();
  console.log("===== Soal 4 =====")
  console.log(
    "Kasus di atas memiliki dua masalah jika misalnya digunakan dalam sebuah sistem inventory management, yaitu: \n" + 
    "1. Ada nama buah yang duplikat, ini dapat menjadi masalah ketika ingin dilakukan search/query berdasarkan nama\n" + 
    "2. Selain nama yang duplikat, ada juga ID yang duplikat. Hal ini menjadi masalah karena sistem tidak memiliki tanda pengenal unik untuk mengidentifikasi setiap objek\n");