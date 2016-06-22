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
            destname,
            filename,
            content
        } = file;

        if (!panto.util.isNil(content)) {
            return Promise.resolve(file);
        } else {
            return panto.file.write(destname || filename, content).then(() => {
                return panto.util.extend({}, file);
            });
        }
    }
}

module.exports = WriteTransformer;