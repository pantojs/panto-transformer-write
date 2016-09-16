/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[09:49:10]:revised
 * 2016-09-16[13:07:38]:return final name
 *
 * @author yanni4night@gmail.com
 * @version 0.3.4
 * @since 0.1.0
 */
'use strict';

const Transformer = require('panto-transformer');

class WriteTransformer extends Transformer {
    _transform(file) {
        const {
            filename,
            content
        } = file;

        const {
            destname
        } = this.options;

        let finalName = filename;

        if (panto._.isFunction(destname)) {
            finalName = destname.call(file, file);
        } else if (panto._.isString(destname)) {
            finalName = destname;
        } else if (!panto._.isNil(destname)) {
            panto.log.warn(`WriteTransform warnning: ${destname} must be a function or string`);
        }

        const finalFile = panto._.extend(file, {
            filename: finalName
        });

        if (panto._.isNil(content)) {
            return Promise.resolve(finalFile);
        } else {
            return panto.file.write(finalName, content).then(() => finalFile);
        }
    }
    isCacheable() {
        return false;
    }
}

module.exports = WriteTransformer;
