import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractPDFText = async (pdfPath) => {

    const data = new Uint8Array(
        fs.readFileSync(pdfPath)
    );

    const pdf = await pdfjsLib.getDocument({
        data,
    }).promise;

    let extractedText = "";

    for (let i = 1; i <= pdf.numPages; i++) {

        const page = await pdf.getPage(i);

        const content = await page.getTextContent();

        const pageText = content.items
            .map(item => item.str)
            .join(" ");

        extractedText += pageText + "\n\n";
    }

    return extractedText;
};