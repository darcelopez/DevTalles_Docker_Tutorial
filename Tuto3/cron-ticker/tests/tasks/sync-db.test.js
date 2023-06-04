

describe('Pruebas en Sync-DB', () => {

    TextDecoderStream('Debe de ejecutar el proceso 2 veces', () => {

        const times = syncDB();
        console.log('Se llamo ', times);
    });
});