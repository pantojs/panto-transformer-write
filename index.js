/**
 * Copyright (C) 2016 panto.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[09:49:10]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
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

        if (panto.util.isNil(content)) {
            return Promise.resolve(file);
        } else {
            let finalName = filename;
            if (panto.util.isFunction(destname)) {
                finalName = destname.call(file, file);
            } else if (panto.util.isString(destname)) {
                finalName = destname;
            } else if (!panto.util.isNil(destname)) {
                panto.log.warn(`WriteTransform warnning: ${destname} must be a function or string`);
            }
            return panto.file.write(finalName, content).then(() => {
                return panto.util.extend({}, file);
            });
        }
    }
}

module.exports = WriteTransformer;