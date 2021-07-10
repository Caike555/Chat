export function getTabAmount(input: string, tabAmount: any = 5): string {
    let charsOfInput: Array<string> = input.split('');
    let amountOfCharsFound = 0;
    charsOfInput.forEach(() => {
        if (amountOfCharsFound == 8)
            tabAmount -= 1;
        amountOfCharsFound++;
    });
    let returningTabs = "";
    for (let i = 0; i < tabAmount; i++) {
        returningTabs += "\t";
    }
    return returningTabs;
}
