export const translate = (str) => {
    if (!str) return [];
    const split = str.match(/.{1,3}/g);
    let output = [];
    const proteins = {
     AUG: 'Methionine', UUU: 'Phenylalanine', UUC: 'Phenylalanine', UUA: 'Leucine', UUG: 'Leucine',
     UCU: 'Serine', UCC: 'Serine', UCA: 'Serine', UCG: 'Serine', UAU: 'Tyrosine', UAC: 'Tyrosine',
     UGU: 'Cysteine', UGC: 'Cysteine', UGG: 'Tryptophan', UAA: 'STOP', UAG: 'STOP', UGA: 'STOP'}

    const stop = x => x === 'STOP';
    split.some(i => {
        const prot = proteins[i];
        if(!i) throw new Error('Invalid codon');
        else if(!stop(prot)) {
            output.push(prot);
        } else {
            return output;
        }
    });

    return output;
}