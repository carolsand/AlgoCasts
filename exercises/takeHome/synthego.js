
//Question 1
/* a: takes a sequence dnaInput(string) {
     nbases = 4 * (n -1);
    string[3] = 'phosphate linkage'

    returns number of each different part in the sequence (bas-sugar and lingaes)
    ex. “-Uro-Uro-Gro-Ums-Um” should return 2 -Ur, 1 -Gr, 2 -Um, 3 o, and 1 s
   
} */

function dnatypes(sequence){
    // split the string to exam each base's contents
    let newSeq = sequence.split('-'); 
    let base1 = '-Ur';
    let base2 = '-Gr';
    let base3 = '-Um';
    let base1Count = 0;
    let base2Count = 0;
    let base3Count = 0;
    let baseType = '';
    let sbase = 's'
    let nbase = 'o'

    let base1Arr  =[];
    let base2Arr  =[];
    let base3Arr  =[];

    //travese the new string and pickout parts
    for(let i=0; i <= newSeq.length; i++){
        basetype = newSeq[3]
        if(newSeq[i] === base1){
            base1Arr.push(i);
            base1Count++;
        } else if ( newSeq[i] === base2){
            base2Arr.push(i)
            base2Count++;
        } else if (newSeq[i] === base3){
            base3Arr.push(i);
            base3Count++;
        } else {
            return console.log ('No bases found');
        }

        if(!newSeq[3]) {
            return
        }

        if(newSeq[3] === sbase){
            sCount++;
         } else if (newSeq[3] === nbase){
             nCount++;
         } else {
             return console.log('No linkage detected');
         }
       return (base1Count, base1Arr, base2Count, base2Arr, base3Count, base3Arr, sbase, sCount, nbase, nCount)
    }    
}

const chemChart = fileOpen('./chemChart');

function calcMass(sequence, chemChart){
    let newSeq = sequence.split('-'); 
    let base1 = '-Ur';
    let base2 = '-Gr';
    let base3 = '-Um';
    // let base1Count = 0;
    // let base2Count = 0;
    // let base3Count = 0;
    // let sbase = 's'
    // let nbase = 'o'

    let newSeq = sequence.split('-');
    let mass = 0;

    for(let part = 0; part <= newSeq.length; part++){
        // I could use case here but can refactor later
        if(newSeq[part] === base1){
            mass = chemChart[part].mass;
        } else if(newSeq[part] === base2){
            mass = chemChart[part].mass;

        } else if (newSeq[part] === base3){
            mass = chemChart[part].mass;
        }
        return mass;
    }
    return mass;
}

/* Q2 Return seq in shipping label format */
function validShipSeq(sequence){
    let newSeq = sequence.split('-').join();
    let shipBase = []
    for(ltr of newSeq){
        if(newSeq === 'A' || newSeq === 'C' || newSeq === 'G' || newSeq[ltr] === 'T' || newSeq[ltr] === 'U' || newSeq[ltr] === 'I' ){
            shipBase.push(ltr);
        }
        return shipBase;
    }
}


/*Q3  validSeq()    */
function validSeq(sequence) {
    validSeq = reqEx(/AGCTUI/);

    for(ltr of sequence){
        if(sequence[ltr] === 'A'|| 'G' || 'C' || 'T' || 'U' || 'I' ){
            return console.log('Success');
        } else if(sequence[ltr] !== validSeq ) {
            return console.log(`Sequence not valid $sequence[ltr]`)
        }
    }
}



/* Simple unit tests for functions */
let sequence = 'Gdo-Gdo-Ado-Ado-Tdo-Gro-Gro-Cro-Uro-Uro-Uro-Ur'
let bases = 'ATCGUI'


test_dna_types = dnatypes(sequence);
console.log(`Counts of dna_types`, test_dna_types);

test_valid_ShipSeq = validShipSeq(bases);
console.log(`Sipping Label base`, test_valid_ShipSeq);

test_valid_seq = validSeq(bases);
console.log('Bases', test_valid_seq);