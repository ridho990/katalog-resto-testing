const UrlParser = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splitedUrl = this._urlSplitter(url);
        return this._urlCombiner(splitedUrl);
    },

    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlSplitter(url);
    },

    // mengubah hash menjadi terpisah menjadi 3 bagian
    _urlSplitter(url) {
        const urlsSplits = url.split('/');
        // Tidak dimulai dari indeks 0 karena hasil dari split /ayam/sapi ["", "ayam", "sapi", ...]
        return {
            resource: urlsSplits[1] || null,
            id: urlsSplits[2] || null,
            verb: urlsSplits[3] || null,
        };
    },

    // Kombinasi hash url
    _urlCombiner(splitedUrl) {
        return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
    },
};

export default UrlParser;
