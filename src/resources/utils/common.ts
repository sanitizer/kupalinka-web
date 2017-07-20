
export function  loadDataFromFile(filePath: string): string {
    let reader = new XMLHttpRequest();
    reader.open("GET", filePath, false);
    reader.send(false);
    return reader.responseText;
}