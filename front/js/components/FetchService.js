class FetchService {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    async fetch(url, options = {}) {
        try {
            const response = await fetch(`${this.apiBaseUrl}${url}`, options);
            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(`Erro: ${response.status} - ${errorDetails.message || 'Erro na requisição'}`);
            }
            return response.json();
        } catch (error) {
            console.error('Erro de rede:', error);
            throw error;
        }
    }
}

export default FetchService;
