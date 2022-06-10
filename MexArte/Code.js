function doGet(){
    var html=HtmlService.createTemplateFromFile('../archivo artista/archivoartista');
    var output=html.evaluate();

    return output;
}

function upLoadFile(obj){
    var file=Utilities.newBlob(obj.bytes, obj.mimeType, obj.filename);
    var folder = DriveApp.getFolderById('1QwnEuKielY0Tr2FQmWaGc6DF2ThcJ9i-');
    var createFile = folder.createFile(file);
    return createFile.getId();
}
