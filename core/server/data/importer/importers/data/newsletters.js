const debug = require('@tryghost/debug')('importer:newsletters');
const _ = require('lodash');
const BaseImporter = require('./base');

const ignoredColumns = ['sender_email'];

class NewslettersImporter extends BaseImporter {
    constructor(allDataFromFile) {
        super(allDataFromFile, {
            modelName: 'Newsletter',
            dataKeyToImport: 'newsletters'
        });
    }

    /**
    * Remove ignored columns
    */
    sanitizeValues() {
        _.each(this.dataToImport, (obj) => {
            ignoredColumns.forEach((column) => {
                delete obj[column];
            });
        });
    }

    beforeImport() {
        debug('beforeImport');
        this.sanitizeValues();
        return super.beforeImport();
    }

    doImport(options, importOptions) {
        return super.doImport(options, importOptions);
    }
}

module.exports = NewslettersImporter;
