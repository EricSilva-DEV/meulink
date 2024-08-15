
//Buscar os links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


// Salvar um link no localStorage

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink) {
        console.log('Você já tem esse link na lista')
        return;
    }


// Adicionar esse novo link na lista
    linksStored.push(newLink)

    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso')
}