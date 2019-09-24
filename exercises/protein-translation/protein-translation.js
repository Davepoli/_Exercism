export const translate = (str) => {
    if (!str) {return []}

    const prot = {
         AUG: 'Methionine', UUU: 'Phenylalanine', UUC: 'Phenylalanine', UUA: 'Leucine', UUG: 'Leucine',
         UCU: 'Serine', UCC: 'Serine', UCA: 'Serine', UCG: 'Serine', UAU: 'Tyrosine', UAC: 'Tyrosine',
         UGU: 'Cysteine', UGC: 'Cysteine', UGG: 'Tryptophan', UAA: 'STOP', UAG: 'STOP', UGA: 'STOP'}
     let output = [];
     const stop = x => x === 'STOP';

    str.match(/.{1,3}/g).some(i => {
        if(!prot[i]) throw new Error('Invalid codon');
        else if(!stop(prot[i])) {
            output.push(prot[i]);
        } else {
            return output;
        }

    });
    return output;
}


