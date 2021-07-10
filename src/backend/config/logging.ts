import { getTabAmount } from "./utils/getTabAmount";
import config from './config'

let Reset = "\x1b[0m";
let FgRed = "\x1b[31m";
let FgYellow = "\x1b[33m";
let FgCyan = "\x1b[36m";

function LogColor(color: string, text: string) {
    process.stdout.write( `${ color }${text}${ Reset } `);
}

function Log(namespace: string, text: any, type: number) {
    if(config.logging.LOGGING_ENABLED == "FALSE") return;
    let namespaceText = `[${ namespace.toUpperCase() }]`;
    process.stdout.write("\t\t\t");
    switch (type) {
        case 1:
            //Warn
            LogColor( FgYellow, `[WARN] ` );
            LogColor( FgCyan, `   ${namespaceText}${getTabAmount(namespaceText)}` );
            LogColor( FgYellow, `${ text }` );
            break;
        case 2:
            //Error
            LogColor( FgRed, `[ERROR] ` );
            LogColor( FgCyan, `   ${namespaceText}${getTabAmount(namespaceText)}` );
            LogColor( FgRed, `${ text }` );
            break;
        default:
            //Normal
            LogColor( FgCyan, `[LOG] ` );
            LogColor( FgCyan, `   ${namespaceText}${getTabAmount(namespaceText)}` );
            LogColor( Reset, `${ text }` );
            break;
    }

    console.log( "" );
}


export default { Log };