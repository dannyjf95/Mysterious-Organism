// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 4; i++)  {
    //changed to 4 for step 5
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, bases) => {
  // returning properties as params value
  return {
    specimenNum: num,
    dna: bases,
    mutate() {
      //randomly selecting mutated base
      const randDna = Math.floor(Math.random() * this.dna.length); 
      let newRandBase;

      do {
        //loops untill no first two are the same
        newRandBase = returnRandBase();
      } while (this.dna[randDna] === newRandBase);//using the randDna to produce new base
      this.dna[randDna] = newRandBase; // will generate new untill none the same

      console.log(newRandBase); // prints value of newRandBase
      console.log(this.dna); // print out the value of this.dna
      return this.dna;
    },
    compareDNA(another) {
      //iterating through both types and return sahred common %
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === another.dna[i]) { //comparing index's
          count += 1; // goes up one for every match out of 4
        }
      }
      let sharedPercentage = (count * 100) / this.dna.length;

      let toFixed = sharedPercentage.toFixed(0);
      console.log(
        `Specimen no. ${this.specimenNum} and ${another.specimenNum} have ${toFixed}% shared dna in common`
      );
    },
    willLikelySurvive () { //needed helpm from solution for this
      const cOrG = this.dna.filter((letters => letters === 'C' || letters === 'G')) 
      return cOrG.length / this.dna.length > .6 ? true : false;
       
    }
  };
};

// 30 requests

let survivingSpec = []

let sCount = 0

while (survivingSpec.length < 30) {//chose while after solution
   let mock30 = pAequorFactory(sCount, mockUpStrand());

   if(mock30.willLikelySurvive()) {
     survivingSpec.push(mock30)
   }
   sCount++
}

console.log(survivingSpec)








// step 5
// the same at the same point not all together dummy
// const pAequor1 = pAequorFactory(1, ["A", "C", "T", "G"]);
// const pAequor2 = pAequorFactory(2, mockUpStrand());
// console.log(mockUpStrand());
// pAequor1.mutate(); // ALSO SHOWS WHAT WAS SWAPPED
// pAequor1.compareDNA(pAequor2);


// console.log(pAequorFactory())
//
//
//
//
//
//
//
//if the same re trys untill non match
// while (this.dna === newRandBase) {
// newRandBase = returnRandBase;
// }
